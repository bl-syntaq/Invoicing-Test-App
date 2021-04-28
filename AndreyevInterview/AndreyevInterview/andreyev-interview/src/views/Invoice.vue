<template>
  <div class="about">
    <router-link :to="{ name: 'Invoices' }">Back</router-link>

    <h2>Invoice Details</h2>

    <span>Invoice #{{$route.params.id}}</span>

    <h3>Line Items</h3>

    <table>
      <thead>
        <th>ID</th>
        <th>Description</th>
        <th>Quantity</th>
        <th>Cost</th>
      </thead>
      <tbody>
        <tr v-for="item in state.lineItems" :key="item.id">
          <td>{{item.id}}</td>
          <td>{{item.description}}</td>
          <td>{{item.quantity}}</td>
          <td>{{item.cost}}</td>
        </tr>
      </tbody>
    </table>

    <form @submit.prevent>
      <h4>Create Line Item</h4>
      <input type="text" name="description" placeholder="Description" v-model="state.description" />
      <input type="number" name="quantity" placeholder="Quantity" v-model="state.quantity" />
      <input type="number" name="cost" placeholder="Cost" v-model="state.cost" />
      <button @click="createLineItem">Create Invoice</button>
    </form>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, reactive} from "vue";

export default defineComponent({
  name: "Invoice",
  props: {
    id: {
      type: [String, Number],
      required: true
    }
  },
  setup(props) {
    const state = reactive({
      lineItems: [],
      description: "",
      quantity: "0",
      cost: "0"
    })

    function fetchLineItems() {
      fetch(`http://localhost:5000/invoices/${props.id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      }).then((response) => {
        response.json().then(lineItems => (state.lineItems = lineItems))
      })
    }

    function createLineItem() {
      fetch(`http://localhost:5000/invoices/${props.id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          description: state.description,
          quantity: Number(state.quantity),
          cost: Number(state.cost)
        })
      }).then(fetchLineItems)
    }

    onMounted(fetchLineItems)

    return {state, createLineItem}
  }
})
</script>