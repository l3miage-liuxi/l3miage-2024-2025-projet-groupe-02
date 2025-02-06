import { Component,signal } from '@angular/core';
import { LeafletModule } from '@bluehalo/ngx-leaflet';
import {circle, icon,Icon, latLng, marker, polygon, tileLayer} from 'leaflet';
import polyline from '@mapbox/polyline';
import {FormsModule} from '@angular/forms';
import {NavComponent} from '../nav/nav.component';
import {PlanifierComponent} from "../planifier/planifier.component";
import {EncodingComponent} from '../encoding/encoding.component';


@Component({
  selector: 'app-map',
  imports: [LeafletModule,FormsModule,NavComponent,EncodingComponent,PlanifierComponent],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent {
  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 5,
    center: latLng(46.879966, -0.726909)
  };
  layers = [
    ...this.getSit().map(T=>marker(latLng(T),{
      icon: icon({
        ...Icon.Default.prototype.options,
        iconUrl: 'markers/marker-icon.png',
        iconRetinaUrl: 'markers/marker-icon-2x.png',
        shadowUrl: 'markers/marker-shadow.png'
      })
    }))
  ];
  getRoute():void{
    let request = new XMLHttpRequest();

    request.open('POST', "https://api.openrouteservice.org/optimization");

    request.setRequestHeader('Accept', 'application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8');
    request.setRequestHeader('Content-Type', 'application/json');
    request.setRequestHeader('Authorization', '5b3ce3597851110001cf6248366ddf83a2ee4d23ba9481ec85060854');

    request.onreadystatechange = function () {
      if (this.readyState === 4) {
        console.log('Status:', this.status);
        console.log('Headers:', this.getAllResponseHeaders());
        console.log('Body:', this.responseText);
      }
    };

    const body = '{"jobs":[{"id":1,"service":300,"delivery":[1],"location":[1.98465,48.70329],"skills":[1],"time_windows":[[32400,36000]]},{"id":2,"service":300,"delivery":[1],"location":[2.03655,48.61128],"skills":[1]},{"id":3,"service":300,"delivery":[1],"location":[2.39719,49.07611],"skills":[2]},{"id":4,"service":300,"delivery":[1],"location":[2.41808,49.22619],"skills":[2]},{"id":5,"service":300,"delivery":[1],"location":[2.28325,48.5958],"skills":[14]},{"id":6,"service":300,"delivery":[1],"location":[2.89357,48.90736],"skills":[14]}],"vehicles":[{"id":1,"profile":"driving-car","start":[2.35044,48.71764],"end":[2.35044,48.71764],"capacity":[4],"skills":[1,14],"time_window":[28800,43200]},{"id":2,"profile":"driving-car","start":[2.35044,48.71764],"end":[2.35044,48.71764],"capacity":[4],"skills":[2,14],"time_window":[28800,43200]}],"options":{"g":"true"}}';

    request.send(body);
  }

  getSit():[number,number][]{
    let encodedStr="_rihHk_jMPIfAZ^FRZr@t@XHNH_@lCI`C?fAt@`UDnCB~BKfEKjCo@lLc@dEsAzL]tEE`B?vBRfGAz@E|@Gj@G\\\\IPKJEJEXBXHRBr@EzA?zBF~BBjCBfU?xB@dCBxLBlAHz@VdB`@~AlDbKZdAR`ANpAFtA@dCIvC@|@JlAlB|NF~BCx@QXK`@EZ?^BZHZLVPRTHZ?XMRSLYF]@a@Zq@f@o@`@_@jAoA`@SfCi@dBYh@?~@Ph@Xz@`AP^R`A?JIp@Kd@gAxBWb@q@x@a@n@u@|A]hAKXeApBGNKb@Cj@Bn@DZLb@Fx@?jAQ~D]lG_Cx]KxAeAnOGdAcB`WKxAIhAm@`JgDdh@Kp@}@vMo@zHcAbK}@|Hy@lGsBvMMlAoAfIuBfK{CjMuIx[eDhLu@lCoB`I{@dEUbAaAnDs@pC}@hDe@dB{@xCoB|FyChJkAjEa@~Ae@xBUpBM|AMtAQxCAn@?rFTvEVlCXpB\\\\dBp@zC|@~CjFzOpBpGvAdFl@dCx@nDrAjIh@dE`@hDZ|D@VVpDRjG@f@DdABbEBbDFnANdAPx@|@tCHn@J~@FxACzDQnRQbJIfCO`CYbEMjA}DpPWdAwB`KI^W~AQvAMhBGhC_@fYQbDKz@WlBc@bBaArCCHwA`FwAjE{EzK}FvMq@vBi@vBw@bFY~As@hCcCbGmAjDk@jC]pB{@zEa@~B[~BIhBB`CDtABv@LvFJtF@ZHfGFjBFdA^lERjCFhBAxBIp@A~@KdASl@o@bA]rAOZK^GXKt@Kp@c@zC[jBe@bBQv@u@`FIf@l@V\\\\Nd@NLJFRDDL?f@V`DdE`@d@TZ~AnBpCvCfBhBhAp@hEjEhAlAjBdB|A`Bl@z@x@r@bAlA`VpVdChCvDzDbNfNRRNZl@j@f@d@vB~BLLLNLHj@t@`@f@z@n@zD`Et\\\\~\\\\|BfCr@~@Rd@Rj@Hb@LdA@t@?lAKtAIh@_@hAMZq@x@y@d@qAf@sCf@[XKPMl@?\\\\Db@Rn@f@|@L`@Bd@?PEb@w@rEKf@]v@gI~OI^?n@F`@Tf@`@f@r@~@nAhBzC`E~@lALN|AtBV\\\\LNl@v@FJTXZ`@TZlA|AvDdFNt@Hp@Hd@NfAr@lNf@hI@FRtDZtE@ZLjBRrDF|A@RDb@B^L`Cz@vOTtE@z@Bz@?x@@fAAnAAhBBz@F~@\\\\hEB~@?x@Ar@OdBWfBIp@Q|CCTu@tDUpAeBxIi@jGg@lGM`AKh@qAjFCFW~@e@rCI~@?r@Bn@R`DB|@AlAIbAYpCXFzEbA^Jj@NVTJRJr@?vAMbK@nCAd@Eh@CJIBAH@HFDB`@Pz@`@~GxAh[?`E@`EN`MAxC?\\\\?dAJpAX~CBN@d@@HDdAFpAJnB?j@D|@DTHXLV^p@JVDZ^hF|@vHH~AIlKCp@OvAYlBGp@IjGGzOBx@fApIBLBf@LxBNrD@hBEtASzCWpFGzHJxEAt@SnEAlCCf@UjAiAzDSf@]xAi@lCKb@Wj@s@p@Y`@IPKr@AZ?l@Cx@a@`FGz@c@`DSxAGzBEvACRM?ENy@AO?a@@g@?{@C_@E_A_@eDt@k@JMJGHFTHPrAhBZh@LXJf@Jx@HfAX`HJl@nAjFNj@HZz@zCX|@^`AXl@`AzBZr@`AbCZ|@Lt@LtAB|@A`AUfGCbB?~A\\\\zI@vB\\\\`QHvGRfD\\\\dCDbAGtE@dFCx@I^St@i@vAKt@GbAGvB[rOGfAId@oGtj@u@dGc@jCgFdXE`@PtS@rBDxDB|EBVR~@@`@?NLPJVZxAv@hCPb@pAbCR^j@bAXXdA`@VRb@^HFZh@`ArCZf@b@^rA~@H[LwATFUGMvAIZNPZ^fAlBr@tA^v@lA`Cz@vAj@d@~D~BhFzCxBpALHhBdAbAl@pAt@vBpAtDtBjGpD|BlAzPbI~An@^{@Vu@hBmI`AoDHQBGj@qAlBcD|AeD|@{Bp@cBVe@PMRGdAQh@AlC@nEKvACnAc@fCcAjB}@t@SlBq@l@Cb@BlAb@|@XZ?\\\\KfAaArAwAzAiChF_Kv@gApA{@lFgDy@gCe@cB_@_BUsAf@c@jE}Eb@YRGh@Gx@NzQnGzB^nGn@bFf@ZTFPNJPEHQ\\\\I`AFr@BbBFt@HfATrL~Cj@LrBJrGKpXi@bCKtE[fF_@dDBpi@|@z@Fx@Lz@PlVtGp@HfA?`@Gd@Kh@Sd@YfDuCrBy@bEwAn@_@j@e@d@k@b@q@Xo@Z}@Ty@lIgb@T{@Xu@t@oA^a@ZWd@Wv@]nJWxEO`BOxBe@xImCl@Mf@GxAEpCBL?f@@TD|ClAnBdAvAnAbAjA~BvCVb@PRNLp@NVAZGNILITYRg@`@oANa@NOj@[hB{AfAaAXGRu@HQVc@`@k@\\\\]b@Yl@a@bBgAY}EGg@i@eCkA_ESmAEe@FK@GAQIIKAGYQuAcB{YEs@Cc@EmAw@sKImELw^JwCJ_C@uAH_ABULwAd@eJHy@JwBC{@CMIeCE{@COCaAF_A[w@M{@ImC?gAF_CPuBNa@BCDSCODw@l@yDHq@F}@DuAGoFDaBFk@RgARk@tB_FVUR?JS@KEYF]r@aCNu@NeA^aCrGjBpBhAx@l@t@x@f@d@r@v@~@pAxA~BzApCj@zA`AxCn@hCdBfIHf@h@nCTdANCxAk@nBcA~CaA`Aq@nCoChA_At@_@rCq@LENOPSZu@^g@fAw@v@_@n@]FId@u@{@gCaG_RyAeExAdE`G~Qz@fCe@t@GHo@\\\\w@^gAv@_@f@[t@QRONMDsCp@u@^iA~@oCnCaAp@_D`AoBbAyAj@kAcFMUeBgIo@iCaAyCk@{A_@iAu@}AyA}BXy@bCkI~FsUr@kD~@qDx@{Cx@iCVe@HQvL{TbB}DhE_Ip@}@~AuAlAsALO|B}A`DoBn@e@vAcAfB{A|H_HVWzM{NROzAiBjCmCbDkDZ_@~A_BPQj@g@rBmBLKRU|EoEtAgBtAiBtAgB`AwAXY`AeAfAaArA{AJJJ@HADK@IEOv@c@`@M~EwA@CBMHcBTeCHkA@kAC{@E}@q@aEe@gBO}@GcCKaGDk@DKf@u@p@s@j@StASz@GrDYhBSb@Mb@Wb@]x@sA`CgIzA}Ex@sBv@wB~DoOn@aCp@oBdEaKZ_ATgAlBuI~AwEjBeEx@kCvAmGpGkPbDoGvEaItAaC~AuE^s@`@o@tAcBT_@Pa@z@mCfAeCDM?WGeD?_AFs@`B\\\\?w@DqAN{DBy@?qBQyBi@}CI{@@mABeADe@RaBnAgEv@wDNmATqDByACkBIcCc@aHCqA@{JEwBiDui@k@cH[kESuBQwCQwBqAyc@Q{]G{A?i@Cs@@_@FMBQ@SGYGyAAaCJsDCcAMoAe@eF[gCYkBWqAuAiG}@uEQo@Si@y@eBcAwBkB{DgBuDg@yAOs@WmBIoAWmHC}@{@uW_Bye@]sJC[GaCCmBB{D?iGCwAOaDk@mFyBuNKiABg@Ha@RUFQDS?WIe@IQMMKa@[s@kAiDc@gB]cBYkBUkBSsCKmDGmFGwDIgAg@oFg@qCqAcFs@yB}AuFUmAEo@EcDQmBBg@HMBUAOCMKKMAMHc@ASKOMU]IYeAiEUqAM_@i@mGYcEa@mEa@cEy@mFa@qBgAqE}DeNmFkQiAwEEs@DU@]E]IUMOMEW?OGKSWsAUw@Uu@Yk@uGsTmAaEcAoE_@sB]gCOcBM{ASeFi@aXHmBJ{DFs@PgAHEPWB_@AOIYGGSeECeAQmB@KMw@}AmHoA{EIGY_Bg@qDu@kGM{@[qAUq@[m@e@m@OQYS]OeAWaE?[I_Aa@s@yAE[GYMUGo@B{@v@}KXeEFcAzAgTPaBL_A`@qBNi@Xq@Ze@Z?ZKTYPc@Dg@?a@?KGg@Jm@HOLGTCl@?RA|@O?OCc@Bo@?yFBi@t@sCfAuD?g@G]k@y@g@q@MQ}@kAGe@AW?w@Dm@^}AZqBHy@D{ADSP_@j@u@`BsBT]bAoA\\\\k@PNjAqB^m@FML[D[A[W_CUgAKuAAe@@uAEuAMcAQ_A@]FWFGZYjAsAXm@La@`BsD~@qBRm@uDuDK[CYBWCUKMEAc@k@Qc@I]w@sESsBKuC[mEAi@HeIJqF?qABoAFoABeADUF?HM?MEKMAYgCGcCEsDKgB{@wIQoAs@wDg@_Cm@wBOgAEsACwDEcAKs@HMAOEIIA?WLKEy@A]KIEmBGeBIwAEc@SeAe@{Aw@}BMk@}@oEQoAu@}GSyAeAmFQy@aBqHeA_EcB}Fs@eCc@{AQ{@Qc@o@cCWoAWgBM][]e@QuEiAyD}@sAa@o@Kq@Om@ScEgBcBq@UG}@y@OGWUu@s@SOe@a@US{@s@qBcB[_@AAKKE?GDS?MN[|@u@hBUc@kBmBy@}@qAsAMMa@S{@_@}E{ASKOOOEWAO?IAaCa@}@[qAQi@?ODe@P]Bw@GKSkAwBWi@cAoBy@eAc@c@eAm@g@Ym@eAO[SaAM_B}@cBa@g@QOiAy@i@Su@MKIu@}Ba@mAQY_B}A}AgB_AmAwAwAa@e@k@y@YoAGQIOWS_Ak@u@]yAyABe@CSGQKMWGMBKHILW@aASqAC_@g@Oe@u@mEQyBGwBK_@C{PAkN@kBp@{k@CkDCqAY{EkBwWe@oGi@qHq@iJ[cEOaCS{EQyGGuH?qFDoEN_G\\\\sHBc@d@mGT}C^iHRyDZiFzDeg@`@sFVmFPmGl@u\\\\By@BeBTeONuKV{KJmCR_EdAqQNqDBsB?gCK{EWyE_@_DOiAw@iEe@aCu@wCmCwJsCsKg@uBa@kBYoAw@{Cg@eAs@gAm@o@m@_@m@WeAS_@A_AD_@Fc@LqB|@w@VkATiADe@A}AOmAOm@Ok@g@g@{@g@iAQMY{@Oo@Ow@]yCSkBIOSaB}@eGOq@GCWc@OQg@_@QIQC_@@c@LQLOP[l@KVQ|@KrAA~@?pAEL?jCCx@Eh@Q`AK`@iBhEmEnJ_BvCgBhD}@|AsD`GgE~GsJ`Kmk@|k@uQtQkDfDmN|MoDpDkBvB_CzCuAnBqB`D_A`BwAlCqW`j@iHlOaGdMuAzCu@hB}@lCo@dCWhAUfAc@hCuAlLcArIKx@q@|Eq@tDg@`CaA|Dy@tC_AxCk@zAkBnEsBpEyAfDkBtDmB`Di@v@qLtNyBjCiBhCeBvC}@jB{AvDwIlVaAdCu@`By@zAiAlBe@p@qAbB{B`CiAbAqN~KmM`KuGlFg@`@kLjJgO~LoAlA{A`BuCnDsAjBaA~AqJrPuSj^mD`GqAnB{AbBqAjAwAdA_Ah@kBv@{Ab@gBXiAJcA@kC[a@IkA]uCcAc@O_@U{@u@}@kA]mAEe@@W@[FY^aAVc@fAyBXYPKNDNALMJ]Cg@GOSQK?_@QQOa@m@]_@m@a@e@Sq@IS@uEp@eATm@f@e@p@k@p@SJSBa@?QUSKUEWm@[uBmB}NKmAA}@HwCAeCGuAOqASaA[eAmDcKa@_BWeBI{@CmACyLAeC?yBCgUCkCG_C?{BNqAF[JWLKDKD_@AOKYEu@@kB@{@SgG?wBDaB\\\ uErA{Lb@eEDOHq@V_DLkDDQBs@FqC@iCAQC_CEoCu@aU?gAHaC^mCOIYIs@u@S[_@GgA[QH";
    console.log(polyline.decode(encodedStr))
    return polyline.decode(encodedStr);
  }
  addresses = signal([
    '22 Rue Abbé Grégoire, 38000 Grenoble',
    '20 Rue Henri Barbusse, 38600 Fontaine',
    '17 Rue de la Liberté, 38600 Fontaine'
  ]);
}
