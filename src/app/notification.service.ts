import { Injectable } from '@angular/core';
declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class NotificationService {


  constructor(
    // private toastCtrl: ToastController, private alertController: AlertController
  ) { }

  showSuccessNotification(from, align, message) {
    // const type = ['', 'info', 'success', 'warning', 'danger'];
    const type = ['', 'success'];


    const color = Math.floor((Math.random() * 4) + 1);
    $.notify({
      icon: 'pe-7s-gift',
      message: message,
    }, {
        type: type[color],
        timer: 1000,
        placement: {
          from: from,
          align: align
        }
      });
  }

  showErrorNotification(from, align, message) {
    // const type = ['', 'info', 'success', 'warning', 'danger'];
    const type = ['', 'dander'];


    const color = Math.floor((Math.random() * 4) + 1);
    $.notify({
      icon: 'pe-7s-gift',
      message: message,
    }, {
        type: type[color],
        timer: 1000,
        placement: {
          from: from,
          align: align
        },
        color: 'red',
      });
  }

  showWarningNotification(from, align, message) {
    // const type = ['', 'info', 'success', 'warning', 'danger'];
    const type = ['', 'warning'];


    const color = Math.floor((Math.random() * 4) + 1);
    $.notify({
      icon: 'pe-7s-gift',
      message: message,
    }, {
        type: type[color],
        timer: 1000,
        placement: {
          from: from,
          align: align
        }
      });
  }

  showInfoNotification(from, align, message) {
    // const type = ['', 'info', 'success', 'warning', 'danger'];
    const type = ['', 'info'];


    const color = Math.floor((Math.random() * 4) + 1);
    $.notify({
      icon: 'pe-7s-gift',
      message: message,
    }, {
        type: type[color],
        timer: 1000,
        placement: {
          from: from,
          align: align
        }
      });
  }

  // async presentAlertConfirm() {
  //   const alert = await this.alertController.create({
  //     header: 'Confirm!',
  //     message: 'Message <strong>text</strong>!!!',
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         role: 'cancel',
  //         cssClass: 'secondary',
  //         handler: (blah) => {
  //           console.log('Confirm Cancel: blah');
  //         }
  //       }, {
  //         text: 'Okay',
  //         handler: () => {
  //           console.log('Confirm Okay');
  //         }
  //       }
  //     ]
  //   });

  //   await alert.present();
  // }

  // async showInfo(message: string) {
  //   const alert = await this.alertController.create({
  //     header: 'Success',
  //     // subHeader: '',
  //     message: message,
  //     buttons: ['OK']
  //   });
  //   await alert.present();
  // }
  // async showError(message: string) {
  //   const alert = await this.alertController.create({
  //     header: 'Error',
  //     // subHeader: '',
  //     message: message,
  //     buttons: ['OK']
  //   });
  //   await alert.present();
  // }
  // async showException(message: string) {
  //   const alert = await this.alertController.create({
  //     header: 'Exception occured',
  //     subHeader: 'Contact your technical team: with below error',
  //     message: message,
  //     buttons: ['OK']
  //   });
  //   await alert.present();
  // }


  // async submitProfile(message: string) {
  //   const alert = await this.alertController.create({
  //     header: 'Error',
  //     // subHeader: '',
  //     message: message,
  //     buttons: ['OK']
  //   });
  //   await alert.present();
  // }

  showMessage(message: string, type: string) {
  }
}
