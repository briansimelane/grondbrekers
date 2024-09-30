<script setup>
import NavBarComponent from '@/components/NavBar.vue';
import MonthBarComponent from '@/components/MonthBar.vue';

const notificationMethods = [
  { id: 'email', title: 'Email' },
  { id: 'sms', title: 'Phone (SMS)' },
  { id: 'push', title: 'Push notification' },
]
</script>

<template>
  <div>
    <MonthBarComponent />
  </div>
  <div>
    <NavBarComponent />
  </div>

  <h1>Challenges</h1>

  <!-- Wrapper for challenge boxes with responsive grid layout -->
  <div class="grid grid-cols-1 gap-6 md:grid-cols-2 m-5">

    <!-- First Challenge Box -->
    <div class="bg-white shadow sm:rounded-lg">
      <div class="px-4 py-5 sm:p-6">
        <h3 class="text-base font-semibold leading-6 text-gray-900">Kopkrap 1: 1 Desember</h3>
        <div class="mt-2 max-w-xl text-sm text-gray-500">
          <p>Neem 'n besluit oor jou bemarkingstrategie vir volgende jaar.</p>
        </div>
        <div>
          <fieldset>
            <div class="mt-6 space-y-2">
              <div class="flex items-center">
                <input type="radio" name="kopkrap1" class="h-4 w-4 border-gray-300 text-green-600 focus:ring-green-600" />
                <label class="ml-3 block text-sm font-medium leading-6 text-gray-900">Vaste prys</label>
              </div>
              <div class="flex items-center">
                <input type="radio" name="kopkrap1" class="h-4 w-4 border-gray-300 text-green-600 focus:ring-green-600" />
                <label class="ml-3 block text-sm font-medium leading-6 text-gray-900">Minimum prys</label>
              </div>
              <div class="flex items-center">
                <input type="radio" name="kopkrap1" class="h-4 w-4 border-gray-300 text-green-600 focus:ring-green-600" />
                <label class="ml-3 block text-sm font-medium leading-6 text-gray-900">Three way</label>
              </div>
              <div class="flex items-center">
                <input type="radio" name="kopkrap1" class="h-4 w-4 border-gray-300 text-green-600 focus:ring-green-600" />
                <label class="ml-3 block text-sm font-medium leading-6 text-gray-900">Geweedge gemiddelde prys</label>
              </div>
              <div class="flex items-center">
                <input type="radio" name="kopkrap1" class="h-4 w-4 border-gray-300 text-green-600 focus:ring-green-600" />
                <label class="ml-3 block text-sm font-medium leading-6 text-gray-900">Geweedge gemiddelde prys</label>
              </div>
            </div>
          </fieldset>
        </div>
        <div class="mt-5">
          <button type="button" class="inline-flex items-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Submit</button>
        </div>
      </div>
    </div>

    <!-- Second Challenge Box -->
    <div class="bg-white shadow sm:rounded-lg">
      <div class="px-4 py-5 sm:p-6">
        <h3 class="text-base font-semibold leading-6 text-gray-900">Kopkrap 2: 1 Desember</h3>
        <div class="mt-2 max-w-xl text-sm text-gray-500">
          <p>Besluit hoe om jou bemarkingsbegroting te optimaliseer vir maksimum effek.</p>
        </div>
        <div>
          <fieldset>
            <div class="mt-6 space-y-2">
              <div v-for="notificationMethod in notificationMethods" :key="notificationMethod.id" class="flex items-center">
                <input :id="notificationMethod.id + '-2'" name="notification-method-2" type="radio" :checked="notificationMethod.id === 'email'" class="h-4 w-4 border-gray-300 text-green-600 focus:ring-green-600" />
                <label :for="notificationMethod.id + '-2'" class="ml-3 block text-sm font-medium leading-6 text-gray-900">{{ notificationMethod.title }}</label>
              </div>
            </div>
          </fieldset>
        </div>
        <div class="mt-5">
          <button type="button" class="inline-flex items-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Submit</button>
        </div>
      </div>
    </div>

  </div>

</template>
