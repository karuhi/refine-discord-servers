<template>
  <div>
    <navbar />
    <main class="container">
      <div class="user-info container-item">
        <vs-avatar style="margin: 10px">
          <img :src="userAvatarUrl" alt="" style="width: 44px; height: 44px" />
        </vs-avatar>
        こんにちは、{{ user.username }}#{{ user.discriminator }}さん。
      </div>
      <div class="filltered-components container-item">
        <template>
          <div class="center content-inputs">
            <vs-input
              label="サーバー名で検索"
              v-model="searchValue"
              placeholder="サーバー名"
            />
          </div>
        </template>
        <vs-select
          label="フィルター"
          filter
          multiple
          placeholder="フィルターを選択"
          v-model="selectFilter"
        >
          <vs-option
            v-for="(itemss, index) in selectVariables"
            :label="itemss.label"
            :value="itemss.value"
            :key="index"
          >
            {{ itemss.label }}
          </vs-option>
        </vs-select>
        全{{ sortedList.length }}件
      </div>

      <vs-row>
        <vs-col
          :key="index"
          v-for="(col, index) in sortedList"
          vs-type="flex"
          vs-justify="space-around"
          vs-align="center"
          w="3"
          lg="3"
          sm="6"
          xs="12"
          style="padding: calc(1em + 1vw)"
        >
          <vs-card type="1">
            <template #title>
              <h3>{{ col.name }}</h3>
            </template>
            <template #img>
              <vs-avatar v-if="col.icon == null" size="250">
                <template #text>
                  {{ col.name }}
                </template>
              </vs-avatar>
              <img
                v-else
                v-lazy="serverIconUrl(col.id, col.icon)"
                :alt="col.name"
              />
            </template>
            <template #text>
              <p>
                {{ col.owner ? 'owner' : '' }}
              </p>
            </template>
            <template #interactions>
              <vs-button danger icon>
                <i class="bx bx-heart"></i>
              </vs-button>
              <vs-button class="btn-chat" shadow primary>
                <i class="bx bx-chat"></i>
                <span class="span"> 54 </span>
              </vs-button>
              <vs-button v-for="(fea, index) in col.features" :key="index">
                <span class="span">
                  {{ fea }}
                </span>
              </vs-button>
            </template>
          </vs-card>
        </vs-col>
      </vs-row>
    </main>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  middleware: 'auth',
  data: function () {
    return {
      searchValue: '',
      sort: '',
      scTimer: 0,
      scY: 0,
      selectFilter: [],
      selectVariables: [],
    }
  },
  computed: {
    user() {
      return this.$store.state.auth.user
    },
    guilds() {
      return this.$store.state.discordApi.guilds
    },
    tags() {
      return this.$store.state.discordApi.tags
    },
    userAvatarUrl() {
      let user = this.$store.state.auth.user
      let id = user.id
      let avatar = user.avatar
      return `https://cdn.discordapp.com/avatars/${id}/${avatar}.png`
    },

    // 検索処理
    filteredList: function () {
      return this.guilds.filter(function (item) {
        let itemName = item.name.toLowerCase()
        let searchName = this.searchValue.toLowerCase()
        return itemName.indexOf(searchName) > -1
      }, this)
    },
    // ソート後のデータ
    sortedList: function () {
      var copy = this.filteredList.slice()

      if (this.sort === 'asc') {
        return copy.sort(this.comparatorAsc)
      } else if (this.sort === 'desc') {
        return copy.sort(this.comparatorDesc)
      } else {
        return copy
      }
    },
  },
  mounted() {
    let vm = this
    this.getGuild().then(function (guild) {
      vm.addTags()
    })
    window.addEventListener('scroll', this.handleScroll)
    this.openNotification()
  },
  methods: {
    addTags() {
      console.log('add tags')
      console.log(this.tags)
      for (var key in this.tags) {
        console.log(this.tags[key])
        this.selectVariables.push({
          label: `${key}(${this.tags[key]})`,
          value: key,
        })
        this.selectVariables.splice()
      }
    },
    serverIconUrl(serverId, iconId) {
      return `https://cdn.discordapp.com/icons/${serverId}/${iconId}.png`
    },
    openNotification() {
      this.$vs.notification({
        duration: 'none',
        sticky: true,
        position: 'bottom-right',
        title: 'サーバーがたくさんありすぎる？',
        text: `いったん上に戻って絞り込みましょう👀<br /><small>*このタブをクリックで戻れます。</small>`,
        onClick: () => {
          this.toTop()
        },
      })
    },
    ...mapActions({
      getGuild: 'discordApi/getGuild',
    }),
    handleScroll() {
      if (this.scTimer) return
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY
        clearTimeout(this.scTimer)
        this.scTimer = 0
      }, 100)
    },
    toTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },
    comparatorAsc: function (itemA, itemB) {
      if (itemA.text < itemB.text) {
        return -1
      } else if (itemA > itemB.text) {
        return 1
      } else {
        return 0
      }
    },

    comparatorDesc: function () {
      if (itemA.text > itemB.text) {
        return -1
      } else if (itemA < itemB.text) {
        return 1
      } else {
        return 0
      }
    },
  },
}
</script>
<style scoped>
.user-info {
  background-color: white;
  display: flex;
  align-items: center;
}
.filltered-components {
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
