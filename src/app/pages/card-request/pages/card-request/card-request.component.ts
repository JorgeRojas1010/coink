import { Component, OnInit } from '@angular/core';
import { ApiResponse, User } from '../../interface/user';
import { CardRequestService } from '../../services/card-request.service';

@Component({
  selector: 'app-card-request',
  templateUrl: './card-request.component.html',
  styleUrls: ['./card-request.component.scss']
})
export class CardRequestComponent implements OnInit {

  public breadcrumb: string[] = ['Tarjetas Visa Dispensadores', 'Solicitud tarjetas'];
  public nameFiltelModel: string = '';
  public typeFilterModel: string = '';
  public displayedColumns: string[] = ['id', 'name', 'gender', 'status', 'species'];
  public dataSource: User[] = [];

  constructor(
    private cardServ: CardRequestService
  ) { }

  ngOnInit(): void {
    this.search();
  }

  cleanFilter() {
    this.nameFiltelModel = '';
    this.typeFilterModel = '';
  }

  search() {
    this.cardServ.getUserFilter(this.nameFiltelModel, this.typeFilterModel).subscribe((res: ApiResponse) => {
      console.log("🚀 ~ res", res)
      this.dataSource = res.results
    })
  }

}

