<template>
  <div class="m-4 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
    <div class="flex">
      <svg width="25px" class="mr-2" height="25px" viewBox="0 0 24 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12ZM16 12V13.5C16 14.8807 17.1193 16 18.5 16V16C19.8807 16 21 14.8807 21 13.5V12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21H16"
          stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg> 
      <a :href="`mailto:${contactData.email}`">{{ contactData.email }}</a>
    </div>

    <div class="flex">
      <svg class="mr-1" fill="#DC7633" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="28px" height="28px"
        zoomAndPan="magnify" viewBox="0 0 375 374.9999" preserveAspectRatio="xMidYMid meet" version="1.0">
        <defs>
          <path d="M 7.09375 7.09375 L 367.84375 7.09375 L 367.84375 367.84375 L 7.09375 367.84375 Z M 7.09375 7.09375 "
            fill="#ffffff"></path>
        </defs>
        <g>
          <path
            d="M 187.46875 7.09375 C 87.851562 7.09375 7.09375 87.851562 7.09375 187.46875 C 7.09375 287.085938 87.851562 367.84375 187.46875 367.84375 C 287.085938 367.84375 367.84375 287.085938 367.84375 187.46875 C 367.84375 87.851562 287.085938 7.09375 187.46875 7.09375 "
            fill-opacity="1" fill-rule="nonzero" fill="#fff"></path>
        </g>
        <g transform="translate(85, 75)"> 
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" version="1.1" height="215" width="215">
            <path
              d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
              fill="#000000"></path>
          </svg> 
        </g>
      </svg>
      @{{ contactData.twitterUsername }}
    </div>

    <div class="flex">
      <svg width="25px" height="25px" class="mr-2" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" fill="none" width="20" height="20" />
        <g>
          <path
            d="M2.5 18h3V6.9h-3V18zM4 2c-1 0-1.8.8-1.8 1.8S3 5.6 4 5.6s1.8-.8 1.8-1.8S5 2 4 2zm6.6 6.6V6.9h-3V18h3v-5.7c0-3.2 4.1-3.4 4.1 0V18h3v-6.8c0-5.4-5.7-5.2-7.1-2.6z" />
        </g>
      </svg> 
      <a :href="contactData.linkedinUrl" target="_blank">{{ contactData.linkedinText }}</a>
    </div>
  </div>
</template>

<script setup lang="ts">
interface ContactData {
  email: string
  twitterUsername: string
  linkedinUrl: string
  linkedinText: string
}

interface ContactInfoProps {
  contactData: ContactData
}

const props = defineProps<ContactInfoProps>()
</script>