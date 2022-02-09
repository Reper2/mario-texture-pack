/* Script optimisation help: zmx#1273 */ 

function downloadFile(filename) {
    var r = confirm(`Do you want to download:\n${filename}`);
    if (r) {
        fetch(`./${filename}`)
            .then(resp => resp.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = url;
                a.download = filename;
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
			})
		}
}