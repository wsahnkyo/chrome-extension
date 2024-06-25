document.getElementById('captureBtn').addEventListener('click', async () => {
    chrome.tabs.captureVisibleTab(null, {}, async (image) => {
      // 将截图保存至本地或上传至服务器
      const link = document.createElement('a');
      link.href = image;
      link.download = 'screenshot.png';
      link.click();
    });
  });