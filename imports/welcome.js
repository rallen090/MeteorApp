import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { FlowRouter } from 'meteor/kadira:flow-router';

import { HostedPlaylists } from './api/hosted-playlists.js';

import './welcome.html';

Template.welcome_page.onCreated(function playPageOnCreated() {

});

Template.welcome_page.helpers({

});

Template.welcome_page.events({
  'click #js-party-joiner'() {
  	var playlistId = parseInt($('#playlist-id').val(), 10);
    var playlist = HostedPlaylists.findOne({publicId: playlistId});

    if(!playlist){
      $('#invalidPlaylistAlert').display;;
    } 
    else {
      FlowRouter.go('Jukebox.playlist', { _id: playlistId });
    }
  },

});
