  var embedPopoverData = document.getElementsByClassName('bs-popover-embed')[0];
  if (embedPopoverData) {
    if (embedPopoverData['dataset']['is_embeddable'] == 'yes') {
      var button = document.createElement('a');
      button.href = embedPopoverData['dataset']['embed_url'] + '&autostart=true';
      button.className = 'btn btn-lg subscribe-btn pull-right';
      button.target = '_top';
      button.innerText = 'Ava embed versioon';
      var addbuttonto = document.getElementsByClassName('clip-actions')[0];
    addbuttonto.appendChild(button);
    }
  }
