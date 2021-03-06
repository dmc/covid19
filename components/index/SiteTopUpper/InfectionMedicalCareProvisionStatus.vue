<template>
  <div class="InfectionMedicalCareProvisionStatus">
    <div class="InfectionMedicalCareProvisionStatus-heading">
      <h3 class="InfectionMedicalCareProvisionStatus-title">
        {{
          $t('感染状況・医療提供体制（サマリ） {date}時点', {
            date: formatDate(date),
          })
        }}
      </h3>
    </div>
    <div class="InfectionMedicalCareProvisionStatus-Box">
      <div class="InfectionMedicalCareProvisionStatus-Headline">
        <app-link
          to="https://www.fukushihoken.metro.tokyo.lg.jp/hodo/saishin/hassei.html"
        >
          {{ $t('感染状況') }}
        </app-link>
      </div>
      <i18n
        tag="p"
        class="InfectionMedicalCareProvisionStatus-description"
        path="新規陽性者{newPositiveCases}人 / 検査数{tests}件（{statisticDate}参考値 （3日間移動平均））、うち65歳以上の高齢者数{older65}人、死亡者数{deaths}人、都外からの持込検体による陽性数{samplesFromOutside}"
      >
        <template #newPositiveCases>
          <em>
            {{ statuses['新規陽性者'].toLocaleString() }}
          </em>
        </template>
        <template #tests>
          <em>
            {{ statuses['検査数'].toLocaleString() }}
          </em>
        </template>
        <template #statisticDate>
          {{ formatDate(statisticDate) }}
        </template>
        <template #older65>
          <em>
            {{ statuses['うち65歳以上の高齢者数'].toLocaleString() }}
          </em>
        </template>
        <template #deaths>
          <em>
            {{ statuses['死亡者数'].toLocaleString() }}
          </em>
        </template>
        <template #samplesFromOutside>
          <em>
            {{ statuses['都外からの持込検体による陽性数'].toLocaleString() }}
          </em>
        </template>
      </i18n>
    </div>
    <div class="InfectionMedicalCareProvisionStatus-Box">
      <div class="InfectionMedicalCareProvisionStatus-Headline">
        <app-link
          to="https://stopcovid19.metro.tokyo.lg.jp/cards/details-of-confirmed-cases/"
        >
          {{ $t('医療提供体制') }}
        </app-link>
      </div>
      <i18n
        tag="p"
        class="InfectionMedicalCareProvisionStatus-description"
        path="入院数{hospitalized}人（確保病床数{bedsSecured}床）、うち重症者数{severeCases}人（うち重症病床数{bedsSevereSymptoms}床）"
      >
        <template #hospitalized>
          <em>
            {{ statuses['入院数'].toLocaleString() }}
          </em>
        </template>
        <template #bedsSecured>
          <em>
            {{ statuses['確保病床数'].toLocaleString() }}
          </em>
        </template>
        <template #severeCases>
          <em>
            {{ statuses['うち重症者数'].toLocaleString() }}
          </em>
        </template>
        <template #bedsSevereSymptoms>
          <em>
            {{ statuses['うち重症病床数'].toLocaleString() }}
          </em>
        </template>
      </i18n>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import AppLink from '@/components/_shared/AppLink.vue'
import {
  Data as IInfectionMedicalCareProvisionStatusData,
  InfectionMedicalcareprovisionStatus as IInfectionMedicalCareProvisionStatus,
} from '@/libraries/auto_generated/data_converter/convertInfectionMedicalcareprovisionStatus'

type Data = {}
type Methods = {
  formatDate(date: Date): string
}
type Computed = {
  statuses: IInfectionMedicalCareProvisionStatusData
  date: Date
  statisticDate: Date
  infectionMedicalCareProvisionStatus: IInfectionMedicalCareProvisionStatus
}
type Props = {}

export default Vue.extend<Data, Methods, Computed, Props>({
  components: {
    AppLink,
  },
  computed: {
    statuses() {
      return this.infectionMedicalCareProvisionStatus.data
    },
    date() {
      return new Date(this.infectionMedicalCareProvisionStatus.date)
    },
    statisticDate() {
      return this.infectionMedicalCareProvisionStatus.data['検査統計日時']
    },
    infectionMedicalCareProvisionStatus() {
      return this.$store.state.infectionMedicalCareProvisionStatus
    },
  },
  methods: {
    formatDate(date) {
      return this.$d(date, 'date') as string
    },
  },
})
</script>

<style scoped lang="scss">
.InfectionMedicalCareProvisionStatus {
  @include card-container();

  padding: 8px 18px;
  margin-bottom: 10px;

  .InfectionMedicalCareProvisionStatus-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    .InfectionMedicalCareProvisionStatus-title {
      display: flex;
      align-items: center;
      padding: 0 0 4px 0;
      color: $gray-2;

      @include card-h2();
      @include font-size(14);
    }
  }

  .InfectionMedicalCareProvisionStatus-Box {
    overflow: hidden;

    .InfectionMedicalCareProvisionStatus-Headline {
      float: left;
      text-align: center;
      width: 10em;
      border: 1px solid;
      border-color: #000;
      margin: 0 4px 1px 0;
      color: $gray-3;

      @include font-size(12);
    }

    .InfectionMedicalCareProvisionStatus-description {
      @include font-size(12);

      padding: 3px 0 0 0;
      margin: 0;

      > em {
        color: $green-1;
        font-style: normal;
      }
    }
  }
}
</style>
