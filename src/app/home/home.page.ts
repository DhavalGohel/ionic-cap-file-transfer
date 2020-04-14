import { Component } from '@angular/core';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  downloadedPath: string = '';
  constructor(private transfer: FileTransfer, private file: File) {}

  async donwload() {
    const fileTransfer: FileTransferObject = await this.transfer.create();
    console.log(fileTransfer);
    fileTransfer.download('https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', this.file.dataDirectory + 'file.pdf').then((entry) => {
      console.log('download complete: ' + entry.toURL());
      this.downloadedPath = entry.toURL()
    }, (error) => {
      console.log('download erro: ', error);
      // handle error
    });
  }

}
