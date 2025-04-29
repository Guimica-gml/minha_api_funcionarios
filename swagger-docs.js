function generate_swagger_docs(spec) {
    const ui = SwaggerUIBundle({
        spec: spec,
        dom_id: "#swagger-ui",
        deepLinking: true,
        presets: [
            SwaggerUIBundle.presets.apis,
            SwaggerUIStandalonePreset
        ],
        plugins: [
            SwaggerUIBundle.plugins.DownloadUrl
        ],
        layout: "StandaloneLayout"
    })
    window.ui = ui
}

window.onload = function() {
    fetch("swagger-docs.json")
        .then(response => response.json())
        .then(generate_swagger_docs)
        .catch(err => console.error(err));
}
