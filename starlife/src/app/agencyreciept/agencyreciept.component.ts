import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-agencyreciept',
  templateUrl: './agencyreciept.component.html',
  styleUrls: ['./agencyreciept.component.css']
})
export class AgencyrecieptComponent  implements OnInit {
  receiptForm!: FormGroup ;
  policydetails!: FormGroup;
  paymentdetails!:FormGroup

  receiptTypes = [
    { label: 'Individual', value: 'Individual' },
    { label: 'New Business', value: 'New Business' },
    { label: 'Renewal', value: 'Renewal' },
    { label: 'Reinstatement', value: 'Reinstatement' }
  ];

  channels = [
    { label: 'Select', value: '' },
    { label: 'Banca', value: 'Banca' },
    { label: 'Agency', value: 'Agency' }
  ];

  Product_names = [
     {label:'select',value:''},
    {  label: 'e-Wealth Royale',value:'e-wealth Royale'},
    {  label: 'Elite Assure Plus',value:'Elite Assure Plus' },
    {  label: 'Century Plus',value:'century plus' },
    {  label: 'Wealth Creator',value:'wealth creator' },
  ];

  type_reciepts=[
     {label:'Select',value:''},
     {label:'New Business',value:'New Business'},
     {label:'Renewal',value:'Renewal'},
     {label:'Reinstatement',value:'Reinstatement'}
  ];
  
  premium_types=[
    {label:'Select',value:''},
    {label:'Single',value:'Single'},
    {label:'Regular',value:'Regular'}
  ];

  payment_modes=[
    {label:'Select',value:''},
    {label:'NEFT',value:'NEFT'},
    {label:'Cheque',value:'Cheque'},
    {label:'Cash',value:'Cash'}
  ];
  cheque_types=[
    {label:'Select',value:''},
    {label:'Local',value:'Local'},
    {label:'Outstation',value:'Outstation'},
    {label:'Samebank',value:'Samebank'},
  ]

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit():void {
    this.receiptForm = this.formBuilder.group({
      receiptType: ['Individual', Validators.required],
      channel: ['', Validators.required],
      
    });
    this.policydetails = this.formBuilder.group({
    typereceipt:['',Validators.required],
      nameOfProposer: ['', Validators.required],
      dmCode: ['', Validators.required],
      productName: ['', Validators.required],
      applicationNoPolicyNo: ['', Validators.required],
      agentCode: ['', Validators.required],
      dmName: ['', Validators.required],
      premiumType: ['', Validators.required],
      confirmApplicationPolicyNo: ['', Validators.required],
      agentName: ['', Validators.required]
    });
    this.paymentdetails = this.formBuilder.group({
        paymentMode:['',Validators.required],
        panExmpted:['',Validators.required],
        chequeType:['',Validators.required],
        micrCode:['',Validators.required],
        instrumentNo:['',Validators.required],
        instrumentAmount:['',Validators.required],
        panCard:['',Validators.required],
        bankName:['',Validators.required],
        ifscCode:['',Validators.required],
        instrumentDate:['',Validators.required],
        dueAmount:['',Validators.required],
        acNo:['',Validators.required],
        payableAt:['',Validators.required],
        collectionDate:['',Validators.required],
        acknowledge:['',Validators.required]
    });
  }

  Greceipt(){
    console.log(this.receiptForm.value);     
  }
  
  Policydetails(){
    console.log(this.policydetails.value);
  }

  Paymentdetails(){
    console.log(this.paymentdetails.value);
  }
}





