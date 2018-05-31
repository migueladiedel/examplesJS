   function generarGrafico() {
        //En una ventana mediante PHP
        window.open("Graficos/Graficos.php");
		
		//llamada json con post 
        //Generamos gráfico en la misma ventana mediante llamada ajax mediante jquery
        $.post('consultas/equipos.php',{
            operacion:'ConsultaEquiposGrafico'
        },function (respuesta){
                var lista=JSON.parse(respuesta);
                new d3pie("pieChart", {
                "header": {
                    "title": {
                        "text": "Gráfico Tabla Equipos",
                        "fontSize": 24, "font": "open sans"
                    },
                    "subtitle": {
                        "text": "Subtitulo Tabla Equipos", 
                        "color": "#999999", 
                        "fontSize": 12,
                        "font": "open sans"
                    },
                    "titleSubtitlePadding": 9},
                "footer": {
                    "color": "#999999", 
                    "fontSize": 10,
                    "font": "open sans",
                    "location": "bottom-left"
                },
                "size": {"canvasWidth": 590,
                    "pieInnerRadius": "1%",
                    "pieOuterRadius": "90%"
                },
                "data": {
                    "sortOrder": "value-desc",
                    "content": lista
                }, 
                "labels": {"outer": {"pieDistance": 32},
                    "inner": {"hideWhenLessThanPercentage": 3}, 
                    "mainLabel": {"fontSize": 11}, 
                    "percentage": {"color": "#ffffff", "decimalPlaces": 0}, 
                    "value": {"color": "#adadad", "fontSize": 11}, 
                    "lines": {"enabled": true},
                    "truncation": {"enabled": true}
                }, 
                "effects": {
                    "pullOutSegmentOnClick": {
                            "effect": "linear",
                            "speed": 400,
                            "size": 16
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
                        "gradient": {"enabled": true, "percentage": 100}}
            });
        }).error(
            function () {
                console.log('Error al ejecutar la petición');
            }
        );
        
        
    }