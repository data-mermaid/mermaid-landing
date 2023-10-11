const tinymceCloudConfig = {};
tinymceCloudConfig["Default"] = {
	"height": 500,
	"menubar": false,
	"plugins": [
		"advlist autolink lists link image charmap print preview anchor footnotes",
		"searchreplace visualblocks code fullscreen",
		"insertdatetime media table paste code help wordcount",
		"code"
	],
	"external_plugins": {
        "footnotes": "/vendor/tinymce/footnotes/plugin.js"
    },
	"toolbar": "undo redo | formatselect | bold italic backcolor | link | image | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | blockquote | footnotes | removeformat | code"
};