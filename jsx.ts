export const JSX = {
	el: function (name: string & Symbol, attrs: {[key: string]: string}, ...content: any) {
		let d = name === JSX.frag ? document.createDocumentFragment() : document.createElement(name)
		attrs && Object.keys(attrs).forEach(k => {
			if (k.startsWith('on'))
				d[k] = attrs[k]
			else
				(d as Element).setAttribute(k, attrs[k])
		})
		content.forEach(c => {
			if (Array.isArray(c))
				d.append(...c)
			else if (!(c === null || c === false))
				d.append(c)
		})
		return d
	},
	frag: Symbol('frag')
}
