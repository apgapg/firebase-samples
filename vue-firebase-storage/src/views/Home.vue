<template>
  <v-container class="text-center">
    <div class="text-h6 my-8">Sample to demonstrate uploading image to firebase storage</div>
    <v-row class="justify-center">
      <v-col cols="12" sm="6" xl="6">
        <v-file-input
          v-model="image"
          show-size
          :clearable="false"
          dense
          label="Pick Image"
          outlined
          accept="image/png, image/jpeg"
          filled
        />
      </v-col>
    </v-row>
    <div class="my-4 text-center">
      <v-progress-circular indeterminate v-if="isUploading" color="primary" />

      <v-btn v-else :disabled="image==null" color="success" @click="onUpload">UPLOAD IMAGE</v-btn>
      <div class="my-4">
        <a :href="imageUrl" target="_blank" v-if="imageUrl!=null">
          <div>{{imageUrl}}</div>
        </a>
      </div>

      <v-img v-if="imageUrl!=null" class="my-4" max-height="400" contain :src="imageUrl"></v-img>

      <div v-if="error!=null" class="text-red my-4">{{error}}</div>
    </div>
  </v-container>
</template>

<script>
// @ is an alias to /src
import { imageUpload } from "@/mixins/imageUpload";
export default {
  name: "Home",
  mixins: [imageUpload],

  components: {},
  data: () => ({
    image: null,
    isUploading: false,
    imageUrl: null,
    error: null,
  }),
  methods: {
    reset() {
      this.error = null;
      this.imageUrl = null;
      this.isUploading = false;
    },
    async onUpload() {
      try {
        this.reset();
        this.isUploading = true;
        const storageUrl = await this.uploadImage(
          `misc/${this.image.name}`,
          this.image
        );
        this.imageUrl = storageUrl;
      } catch (err) {
        console.log(err);
        this.error = err;
      } finally {
        this.isUploading = false;
      }
    },
  },
};
</script>
