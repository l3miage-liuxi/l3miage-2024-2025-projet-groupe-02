import { Component, input, signal, computed, inject, OnChanges, SimpleChanges } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-encoding',
  imports: [CommonModule,HttpClientModule],
  templateUrl: './encoding.component.html',
  styleUrls: ['./encoding.component.css'],
})
export class EncodingComponent implements OnChanges {
  private http = inject(HttpClient);
  private apiUrl = 'https://api-adresse.data.gouv.fr/search/?q=';

  addresses = input<string[]>(); // 直接接收父组件传入的地址数组
  locations = signal<{ address: string; latitude: number | null; longitude: number | null }[]>([]);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['addresses'] && this.addresses()?.length) {
      this.getAllCoordinates();
    }
  }

  /**
   * 调用 API 获取所有地址的经纬度
   */
  private getAllCoordinates(): void {
    const tempLocations: { address: string; latitude: number | null; longitude: number | null }[] = [];

    this.addresses()?.forEach((address) => {
      this.http.get<any>(`${this.apiUrl}${encodeURIComponent(address)}`).pipe(
        map((response) => {
          if (response.features.length > 0) {
            const coords = response.features[0].geometry.coordinates;
            return { longitude: coords[0], latitude: coords[1] };
          }
          return null;
        })
      ).subscribe((coords) => {
        tempLocations.push({
          address,
          latitude: coords?.latitude ?? null,
          longitude: coords?.longitude ?? null,
        });

        // 使用 signal 更新数据
        this.locations.set([...tempLocations]);
      });
    });
  }

  // 计算属性，检查是否所有地址都已转换完成
  allConverted = computed(() => this.locations().length === (this.addresses()?.length ?? 0));
}
