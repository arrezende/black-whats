const { app, BrowserWindow, BrowserView } = require('electron');
const path = require('path');
const fs = require('fs')
// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}
app.userAgentFallback = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36";
const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: { 
      nodeIntegration: true
    } 
  });
  mainWindow.removeMenu()
  // mainWindow.loadFile('./index.html')
  mainWindow.loadURL('https://web.whatsapp.com/')
  mainWindow.webContents.on('did-finish-load', function() {
    mainWindow.webContents.executeJavaScript(`console.log('file://${__dirname}/index.css')`)

 });
//  const view = new BrowserView()
//  mainWindow.setBrowserView(view)
//  view.setBounds({ x: 0, y: 0, width: 500, height: 600 })
//  view.setAutoResize({width: 400, height:true})
//  view.webContents.loadURL('https://electronjs.org')


 const btn2x = `
 console.log('iniciado')
const interval = setInterval(()=>{
	const header = document.querySelector('#side header')
	if(header){
		clearInterval(interval); //Para o ciclo do intervalo

		const button = document.createElement('button')
		button.innerHTML = '2x'
		button.classList.add('btn')
		button.classList.add('_3NrAe')
		header.appendChild(button)

		button.addEventListener('click', ()=>{

			let btn = button.classList.contains('active')
			console.log(btn)
			if(!btn){

				//console.log(button.classList)
				button.classList.add('active')
				const audios = document.querySelectorAll('audio')
				audios.forEach((audio)=>{
					audio.playbackRate = 1.5
				})
			}else{
				//console.log('n foi')
				button.classList.remove('active')
				const audios = document.querySelectorAll('audio')
				audios.forEach((audio)=>{
					audio.playbackRate = 1
				})
			}
    })//button
  	}
}, 1000)
 `;

 const novoCss = `
 .dark{--outgoing-background: #272727 !important}
  .message-out ._2XJpe { background-color: #272727 !important;}

 .btn{
	font-size: 1rem;
    font-weight: bold;
    padding: 0.5rem;
    color:#b3b3b3
}
.btn.active{
	background: green;
	color: #fff;
    border-radius: 100%;
}

html[dir] ._7W_3c{display:none}
.dark .vwouH ._1c_mC ._2gsiG {
  color: #fff !important;
  background: var(--unread-marker-background);
  padding: 0.5rem;
  border-radius: 15px;
}
html[dir=ltr] .tSmQ1{opacity:0.1}
html[dir=ltr] .tSmQ1:hover {opacity: 1;}
@media screen and (min-width: 1301px){
  .two div:nth-child(4){
   
  }
}

 `; 
 mainWindow.webContents.on('did-stop-loading', () => {
  mainWindow.webContents.insertCSS(novoCss)

  mainWindow.webContents.executeJavaScript("document.querySelector('body').classList.add('dark')")
  mainWindow.webContents.executeJavaScript(btn2x)

 })
  // and load the index.html of the app.
  // mainWindow.loadFile(path.join(__dirname, 'index.html'));

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.


