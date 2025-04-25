import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Certificates } from '../../models/certificates/certificates.model';

@Injectable({
  providedIn: 'root'
})
export class CertificatesService {
  
   private dbPath = '/certificate';

   certificateRef : AngularFirestoreCollection<Certificates>;

  constructor(private db : AngularFirestore) {
    this.certificateRef =  db.collection(this.dbPath);
   }

   getCertificate(): AngularFirestoreCollection<Certificates>{
    return this.certificateRef;
   }

   createCertificate(myCertificate : Certificates) : any {
    return this.certificateRef.add({...myCertificate});
   }

   deleteCertificate(id? : string) : Promise<void> {
      return this.certificateRef.doc(id).delete();
   }
}