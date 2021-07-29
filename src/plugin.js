import TextEditorClass from './editor'



const TextEditorPlugin = function () {
	return {
		statePlugins: {
			spec: {
				wrapSelectors: {
					allowTryItOutFor: () => () => false,
				},
			},
		},
		components: {
			TextEditor: TextEditorClass
		},
	}
}


export default TextEditorPlugin;