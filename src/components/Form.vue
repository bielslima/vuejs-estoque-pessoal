<template>
  <div>
    <form class="form" @submit.prevent="save">
      <div>
        <label class="form__label" for="item">Item</label>
        <input class="form__input" type="text" name="item" id="item" ref="item" v-model="item.name" required>
      </div>

      <div>
        <label class="form__label" for="amount">Quantidade</label>
        <input class="form__input" type="number" min="1" name="amount" id="amount" v-model="item.amount" required>
      </div>

      <div>
        <label class="form__label" for="expiration">Data de expiração</label>
        <input class="form__input" type="text" name="expiration" id="expiration" v-model="item.expiration" placeholder="Ex.: 20/10/2017">
      </div>

      <button class="form__button" type="submit">Enviar</button>
    </form>
  </div>
</template>

<script>
// import { stringToDate } from '../utils/date'

export default {
  data () {
    return {
      item: {
        name: '',
        amount: 1,
        expiration: null
      }
    }
  },

  mounted () {
    this.$refs.item.focus()
  },

  methods: {
    save () {
      const payload = {}

      payload.name = this.item.name
      payload.amount = parseInt(this.item.amount)
      payload.expiration = this.item.expiration

      this.item.name = ''
      this.item.amount = ''
      this.item.expiration = ''

      this.$refs.item.focus()
      this.$store.dispatch('saveItem', payload)
    }
  }
}
</script>

<style scoped>
.form {
  width: 50%;
  margin: 0 auto;
}

  .form .form__label {
    text-transform: uppercase;
    display: block;
    text-align: left;
    color: #444;
    margin: 2rem 0 0.5rem 0;
  }

  .form .form__input {
    width: 100%;
    background: #fff;
    border: none;
    border-bottom: 1px solid #ccc;
    padding: 0.7rem;
    transition: border 0.2s ease-in-out;
    font-size: 1rem;
    color: #666;
  }
    .form .form__input:hover,
    .form .form__input:focus {
      border-bottom-color: #999;
      outline: none;
    }

  .form .form__button {
    font-family: 'Poiret One', cursive;
    font-size: 1.5rem;
    text-transform: uppercase;
    background: #754c24;
    border: none;
    color: #fff;
    cursor: pointer;
    padding: 0.8rem 4rem;
    border-radius: 2px;
    box-shadow: 0 20px 60px #ccc;
    margin-top: 3rem;
  }
</style>
