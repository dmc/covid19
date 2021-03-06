<template>
  <cards-lazy-row :rows="rows" />
</template>

<script lang="ts">
/* eslint-disable simple-import-sort/imports -- ブラウザでの表示順に合わせて各 card の component を import する */
import Vue from 'vue'

import CardsLazyRow from '@/components/index/_shared/CardsLazyRow.vue'

// 陽性者の属性
const ConfirmedCasesAttributesCard = () =>
  import('@/components/index/CardsReference/ConfirmedCasesAttributes/Card.vue')
// 陽性者数（区市町村別）
const ConfirmedCasesByMunicipalitiesCard = () =>
  import(
    '@/components/index/CardsReference/ConfirmedCasesByMunicipalities/Card.vue'
  )
// 発症日別による陽性者数の推移
const PositiveNumberByDevelopedDateCard = () =>
  import(
    '@/components/index/CardsReference/PositiveNumberByDevelopedDate/Card.vue'
  )
// 確定日別による陽性者数の推移
const PositiveNumberByDiagnosedDateCard = () =>
  import(
    '@/components/index/CardsReference/PositiveNumberByDiagnosedDate/Card.vue'
  )
// 死亡日別による死亡者数の推移
const DeathsByDeathDateCard = () =>
  import('@/components/index/CardsReference/DeathsByDeathDate/Card.vue')
// 検査実施件数
const TestedNumberCard = () =>
  import('@/components/index/CardsReference/TestedNumber/Card.vue')
// L452R変異株スクリーニングの実施状況
const VariantCard = () =>
  import('@/components/index/CardsReference/Variant/Card.vue')
// ワクチン接種回数（高齢者・累計）
const VaccinationCard = () =>
  import('@/components/index/CardsReference/Vaccination/Card.vue')
// 新型コロナコールセンター相談件数
const TelephoneAdvisoryReportsNumberCard = () =>
  import(
    '@/components/index/CardsReference/TelephoneAdvisoryReportsNumber/Card.vue'
  )
// 受診相談窓口における相談件数
const MonitoringConsultationDeskReportsNumberCard = () =>
  import(
    '@/components/index/CardsReference/MonitoringConsultationDeskReportsNumber/Card.vue'
  )
// 東京都発熱相談センターにおける相談件数
const TokyoFeverConsultationCenterReportsNumberCard = () =>
  import(
    '@/components/index/CardsReference/TokyoFeverConsultationCenterReportsNumber/Card.vue'
  )
// 都営地下鉄の利用者数の推移
const MetroCard = () =>
  import('@/components/index/CardsReference/Metro/Card.vue')
// 都庁来庁者数の推移
const AgencyCard = () =>
  import('@/components/index/CardsReference/Agency/Card.vue')
/* eslint-enable simple-import-sort/imports */

export default Vue.extend({
  components: {
    CardsLazyRow,
  },
  data() {
    return {
      rows: [
        [ConfirmedCasesAttributesCard, ConfirmedCasesByMunicipalitiesCard],
        [PositiveNumberByDevelopedDateCard, PositiveNumberByDiagnosedDateCard],
        [DeathsByDeathDateCard, TestedNumberCard],
        [VariantCard, VaccinationCard],
        [TelephoneAdvisoryReportsNumberCard],
        [
          MonitoringConsultationDeskReportsNumberCard,
          TokyoFeverConsultationCenterReportsNumberCard,
        ],
        [MetroCard, AgencyCard],
      ],
    }
  },
})
</script>
