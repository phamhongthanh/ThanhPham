﻿	function ThanhPham() {
		//Get the selected text and append the extra info
		var body_element = document.getElementsByTagName('body')[0];
		var selection;
		selection = window.getSelection();
		var pagelink = "<br /><br /> Chào! LH 0975 983 789 Hoặc Muốn Copy Vào Đây Nhé: <a href='qmktech.com'>http://qmktech.com"+document.location.pathname+"</a>";
		var copytext = pagelink;
		var newdiv = document.createElement('div');
		
		//hide the newly created container
		newdiv.style.position='absolute';
		newdiv.style.left='-99999px';
		
		//insert the container, fill it with the extended text, and define the new selection
		body_element.appendChild(newdiv);
		newdiv.innerHTML = copytext;
		selection.selectAllChildren(newdiv);
		
		window.setTimeout(function() {
			body_element.removeChild(newdiv);
		},0);
	}
document.oncopy = ThanhPham;
