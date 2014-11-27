angular.module('notesApp', [])
  .controller('MainCtrl', [function() {
      var self = this;
      self.notes = {
        shyam: {
          id: 1,
          label: 'First Note',
          done: false
        },
        Misko: {
          id: 3,
          label: 'Finished Third Note',
          done: true
        },
        brad: {
          id: 2,
          label: 'Second Note',
          done: false
        }
    };
    self.changeNotes = function() {
      alert('wut');
      self.notes = {
        shazam: {
          id: 1,
          label: 'Derivative Note',
          done: false
        },
        holy: {
          id: 3,
          label: 'Integral Note',
          done: true
        },
        bolt: {
          id: 2,
          label: 'Second Note',
          done: false
        }
      };
    };
  }]);
