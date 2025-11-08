const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  sendQuery: (query) => ipcRenderer.send('query', query),
  onResponse: (callback) => ipcRenderer.on('response', callback)
});
