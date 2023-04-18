<template>
  <div>
    <q-layout view="lHh Lpr fff" class="flex flex-center">
      <q-card class="text-black" sqare>
        <q-card-section class="bg-primary flex flex-center">
          <div class="text-h4 text-white">SpaceKioskNG</div>
        </q-card-section>
        <q-card-section class="bg-primary flex flex-center">
          <img
            alt="vspace.one"
            src="~assets/logo_vspaceone.png"
            style="height: 300px"
          />
        </q-card-section>
        <q-card-section class="bg-primary">
          <q-form>
            <q-input
              type="email"
              square
              clearable
              label="E-Mail Adresse"
              :rules="[this.required, this.isEmail, this.short]"
              v-model="email"
            ></q-input>
            <q-input
              type="password"
              square
              clearable
              label="Password"
              :rules="[this.required, this.short]"
              v-model="password"
            ></q-input>
            <div>{{ errorMsg }}</div>
          </q-form>
        </q-card-section>

        <q-card-actions class="bg-secondary">
          <q-btn
            class="full-width bg-primary"
            @click="submit"
            color="bg-primary"
            >Login</q-btn
          >
        </q-card-actions>
        <q-card-actions class="bg-secondary">
          <q-btn
            flat
            class="full-width q-pa-sm"
            @click="dialog = true"
            color="primary"
            >Reset Password</q-btn
          >
        </q-card-actions>
      </q-card>
    </q-layout>
  </div>

  <div>
    <q-dialog v-model="dialog">
      <q-card>
        <q-card-section>
          <div class="text-h6">Please type your E-Mail</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <q-input
            type="email"
            label="E-Mail Adresse"
            v-model="emailReset"
          ></q-input>
        </q-card-section>
        <q-card-section class="q-pt-none float-right">
          <q-btn flat color="primary" @click="dialog = false">Cancel</q-btn>
          <q-btn
            color="accent"
            label="Reset"
            @click="
              (dialog = false),
                forgot,
                (message = 'Email has been sent! Look in Your Spam-Folder.'),
                (messageDialog = true)
            "
          />
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>

  <div>
    <q-dialog v-model="messageDialog">
      <q-card>
        <q-card-section>
          <div>{{ message }}</div>
        </q-card-section>
        <q-card-section class="q-pt-none float-right">
          <q-btn color="accent" label="Close" @click="messageDialog = false" />
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script></script>
