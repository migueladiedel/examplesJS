<!DOCTYPE HTML>
<?php include_once 'config.inc.php'; ?>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<title>Gráfico de Visitas</title>
        
        <script src="js/graficos/d3.min.js"></script>
        <script src="js/graficos/d3pie.min.js"></script>
        <script src="js/eventosconsultas.js"></script>

        Fecha Inicio:
        <?php 
            echo htmlspecialchars($_GET['FechaInicio']);
        ?>
        <br/>
        Fecha Fin &nbsp&nbsp&nbsp:
        <?php 
            echo htmlspecialchars($_GET['FechaFin']);
        ?>
        
        <div id="pieChart" align="center">        
        <script>
            var pie = new d3pie("pieChart", {
                "header": {
                        "title": {
                        <?php
                        switch (htmlspecialchars($_GET['TipoInforme'])) {
                            case 1: ?>
                                "text": 'Visitantes por Países',
                                <?php break; ?>
                            <?php
                            case 2: ?>
                                "text": 'Visitantes por Comunidades Autónomas',
                                <?php break; ?>
                            <?php
                            case 3: ?>
                                "text": 'Visitantes por Provincias',
                                <?php break; ?>
                            <?php
                            case 4: ?>
                                "text": 'Tipo de Turistas',
                                <?php break; ?>
                        <?php } ?>
                                "fontSize": 24,
                                "font": "open sans"
                            },
                        "subtitle": {
                            "text": "  ",
                            "color": "#999999",
                            "fontSize": 12,
                            "font": "open sans"
                        },
                        "titleSubtitlePadding": 9
                },
                "size": {
                        "canvasHeight": 500,
                        //"canvasWidth": 1000,
                        "canvasWidth": 1300,
                        "pieOuterRadius": "100%"
                },
                "data": {
                        "sortOrder": "value-asc",
                        "smallSegmentGrouping": {
                                "enabled": true,
                                "value": 0.5,
                                "valueType": "percentage",
                                "label": "OTROS"
                        },
                        "content": [
                                <?php $db = new Conect_MySql();
                                    switch (htmlspecialchars($_GET['TipoInforme'])) {
                                        case 1:
                                            $sql = "SELECT DescripcionPais As Descripcion, Sum(Personas) As Cantidad";
                                            $sql .= " FROM paises, visitas";
                                            $sql .= " WHERE paises.CodigoPais = visitas.CodigoPais";
                                            $sql .= " AND visitas.CodigoPais <> 0";
                                            $sql .= " AND Fecha >= '" . $db->fecha_mysql(htmlspecialchars($_GET['FechaInicio'])) . "'";
                                            $sql .= " AND Fecha <= '" . $db->fecha_mysql(htmlspecialchars($_GET['FechaFin'])) . "'";
                                            $sql .= " GROUP BY DescripcionPais";
                                            $sql .= " ORDER BY Cantidad desc";
                                            break;
                                        case 2:
                                            $sql = "SELECT DescripcionComunidadAutonoma As Descripcion, Sum(Personas) As Cantidad";
                                            $sql .= " FROM comunidadesautonomas, visitas";
                                            $sql .= " WHERE comunidadesautonomas.CodigoComunidadAutonoma = visitas.CodigoComunidadAutonoma";
                                            $sql .= " AND visitas.CodigoComunidadAutonoma <> ''";
                                            $sql .= " AND Fecha >= '" . $db->fecha_mysql(htmlspecialchars($_GET['FechaInicio'])) . "'";
                                            $sql .= " AND Fecha <= '" . $db->fecha_mysql(htmlspecialchars($_GET['FechaFin'])) . "'";
                                            $sql .= " GROUP BY DescripcionComunidadAutonoma";
                                            break;
                                        case 3:
                                            $sql = "SELECT DescripcionProvincia As Descripcion, Sum(Personas) As Cantidad";
                                            $sql .= " FROM provincias, visitas";
                                            $sql .= " WHERE provincias.CodigoProvincia = visitas.CodigoProvincia";
                                            $sql .= " AND visitas.CodigoProvincia <> ''";
                                            $sql .= " AND Fecha >= '" . $db->fecha_mysql(htmlspecialchars($_GET['FechaInicio'])) . "'";
                                            $sql .= " AND Fecha <= '" . $db->fecha_mysql(htmlspecialchars($_GET['FechaFin'])) . "'";
                                            $sql .= " GROUP BY DescripcionProvincia";
                                            break;
                                        case 4:
                                            $sql = "SELECT TipoTurista As Descripcion, Sum(Personas) As Cantidad";
                                            $sql .= " FROM visitas";
                                            $sql .= " WHERE visitas.TipoTurista <> ''";
                                            $sql .= " AND Fecha >= '" . $db->fecha_mysql(htmlspecialchars($_GET['FechaInicio'])) . "'";
                                            $sql .= " AND Fecha <= '" . $db->fecha_mysql(htmlspecialchars($_GET['FechaFin'])) . "'";
                                            $sql .= " GROUP BY TipoTurista";
                                            break;
                                    }
                                    $que = $db->execute($sql);
                                    while ($row = $db->fetch_row($que)) {
                                ?>

                                {
                                        "label": "<?php echo utf8_encode($row['Descripcion']) ?>",
                                        "value": <?php echo $row['Cantidad'] ?>,
                                        //"color": "#2484c1"
                                },
                                <?php } ?>
                                <?php $db->close_db(); ?>   
                        ]
                },
                "labels": {
                        "outer": {
                                "pieDistance": 32,
                                "format": "label"
                        },
                        "inner": {
                                "hideWhenLessThanPercentage": 2
                        },
                        "mainLabel": {
                                "fontSize": 11
                        },
                        "percentage": {
                                "color": "#ffffff",
                                "decimalPlaces": 2
                        },
                        "value": {
                                "color": "#adadad",
                                "fontSize": 11
                        },
                        "lines": {
                                "enabled": true,
                                "style": "straight"
                        },
                        "truncation": {
                                "enabled": false
                        }
                },
                "effects": {
                        "pullOutSegmentOnClick": {
                                "effect": "linear",
                                "speed": 400,
                                "size": 10
                        }
                },
                "tooltips": {
                        "enabled": true,
                        "type": "placeholder",
                        "string": "{label}: {percentage}% ({value})",
                        "styles": {
                            "fadeInSpeed": 500,
                            "backgroundColor": "#58FAF4",
                            "backgroundOpacity": 0.8,
                            //"color": "#ffffcc",
                            "color": "#000000",
                            "borderRadius": 4,
                            "font": "verdana",
                            "fontSize": 15,
                            "padding": 10
                        },
                        "placeholderParser": function(index, data) {
                        data.label = data.label;
                        data.percentage = data.percentage;
                        data.value = separadorMiles(data.value);
                    }
                },
                "misc": {
                    "colors": {
                            "background": null, // transparent
                            "segments": [
                                    "#2484c1", "#65a620", "#7b6888", "#a05d56", "#961a1a",
                                    "#d8d23a", "#e98125", "#d0743c", "#635222", "#6ada6a",
                                    "#0c6197", "#7d9058", "#207f33", "#44b9b0", "#bca44a",
                                    "#e4a14b", "#a3acb2", "#8cc3e9", "#69a6f9", "#5b388f",
                                    "#546e91", "#8bde95", "#d2ab58", "#273c71", "#98bf6e",
                                    "#4daa4b", "#98abc5", "#cc1010", "#31383b", "#006391",
                                    "#c2643f", "#b0a474", "#a5a39c", "#a9c2bc", "#22af8c",
                                    "#7fcecf", "#987ac6", "#3d3b87", "#b77b1c", "#c9c2b6",
                                    "#807ece", "#8db27c", "#be66a2", "#9ed3c6", "#00644b",
                                    "#005064", "#77979f", "#77e079", "#9c73ab", "#1f79a7"
                            ],
                            "segmentStroke": "#ffffff"
                    },
                    "gradient": {
                            "enabled": false,
                            "percentage": 95,
                            "color": "#000000"
                    },
                    "canvasPadding": {
                            "top": 5,
                            "right": 5,
                            "bottom": 5,
                            "left": 5
                    },
                    "pieCenterOffset": {
                            "x": 0,
                            "y": 0
                    },
                    "cssPrefix": null
                },
            });
        </script>
        </div>
    </head>
    
    <body>
    </body>
</html>
