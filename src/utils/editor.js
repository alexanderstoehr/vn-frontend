import suneditor from "suneditor"
import "suneditor/dist/css/suneditor.min.css"

export function initializeEditor(textarea) {
    const editor = suneditor.create(textarea, {
        height: "350px",
        defaultStyle: "font-size: 16px;",
        buttonList: [
            [
                "undo",
                "redo",
                "bold",
                "italic",
                "underline",
                "strike",
                "list",
                "align",
                "fontSize",
                "formatBlock",
                "table",
                "link",
            ],
        ],
    })

    return editor
}
