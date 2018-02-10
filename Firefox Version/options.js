//this code is based on content from Google's developer page, on the following page https://developer.chrome.com/extensions/options, CC-By 3.0 license https://creativecommons.org/licenses/by/3.0/
function save_options() {
  var blacklist=[];
  blacklist.push(document.getElementById('blacklist').value.split("\n"));
  var debug = document.getElementById('debug').checked;
  chrome.storage.local.set({
    blacklist: blacklist,
    debug: debug
  }, function() {
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

function restore_options() {
  chrome.storage.local.get({
    blacklist: '',
    debug: false
  }, function(items) {
    document.getElementById('blacklist').value = items.blacklist;
    document.getElementById('debug').checked = items.debug;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);