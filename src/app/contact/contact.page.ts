import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage {
  contactlist  = [
    {id: 1, name: 'VIN panal Bsit-3A',number: '09954715520'},

  ]
  sendmessage = [
    {string: 1, messages: ''},
  ]
  constructor(public alertController: AlertController,public actionsheetCtrl: ActionSheetController, public alertCtrl: AlertController ) {
  }
  async showactionButtons(index: number) {
    let actionSheet = this.actionsheetCtrl.create({
      header: 'Select',
      cssClass: 'buttons-css',
      animated: true,
      backdropDismiss: true,
      keyboardClose: false,
      mode: 'ios',
      buttons: [
        {
          text: 'Trash this contact?',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
              this.contactlist.splice(index, 1);
              this.showAlert();
          }
        
        },
        {
          text: 'Send message',
          role: 'message', 
          icon: 'mail',
          handler: () => {
            this.contactlist.splice(index, 0);
            this.show();
          }
        }
      ]
    });
     (await actionSheet).present();
  }
  async addUser() {
    let prompt = await this.alertController.create({
      cssClass: 'buttons-css',
      header: 'Add Contact',
      inputs: [
        {
          name: 'name',
          placeholder: 'Enter Your name',
        },{
          name: 'number',
          placeholder: 'Contact Number',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: (data) => {
            console.log('Saved clicked');
          this.contactlist.push({
            id: data.id,
            name: data.name,
            number: data.number,
          });
     
          }
        }
      ]
    });
    await prompt.present();

  }
  async showAlert() {
    const alert = this.alertCtrl.create({
      cssClass: 'buttons-css',
      header: 'Contact Successfully Deleted!',
      buttons: ['OK'],
    });
    (await alert).present();
  }
  async show(){
    const alert = this.alertCtrl.create({
      cssClass: 'buttons-css',
      header: 'click blue button to message this contact, thanks!',
      buttons: ['OK'],
    });
    (await alert).present();
  }

  async message() {
    let prompt = await this.alertController.create({
      header: 'send your message',
      cssClass: 'message-css',
      inputs: [
        {
          name: 'message',
          placeholder: 'input messages here.. ..',
          cssClass: 'specialClass',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'send message',
          handler: (data) => {
            console.log('Saved clicked'); 
            this.showmassage();
          this.sendmessage.push({
             string: data.id,
            messages: data.message,
          });
     
          }
        }
      ]
    });
    await prompt.present();

  }
  async showmassage() {
    const alert = this.alertCtrl.create({
      cssClass: 'buttons-css',
      header: 'Mesage Sent',
      buttons: ['OK'],
    });
    (await alert).present();
  }
}