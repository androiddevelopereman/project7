<template>
    <div id="carouselExampleSlidesOnly" class="carousel slide image-content" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active position-relative">
                <img src="../../../assets/image1.jpg" class="d-block w-100 image-side" alt="Image1">
                <div class="buttons-overlay">
                    <div class="dropdown ">
                        <button class="dropdown-toggle btn-export" type="button" id="dropdownMenuButton1"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            {{ $t('Language') }}

                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#" @click.prevent="changeLanguage('ar')">{{ $t('Arabic')
                                    }}</a>
                            </li>
                            <li><a class="dropdown-item" href="#" @click.preven="changeLanguage('en')">{{ $t('English')
                                    }}</a>
                            </li>

                        </ul>
                    </div>
                    <button class="btn-export">{{ $t('Support') }}</button>
                </div>
                <div class="carousel-caption d-none d-md-block image-hint">

                    <p>Dont just manage <br>
                        your fleet ....master it <br>
                        Professionally</p>
                </div>

            </div>
            <div class="carousel-item">
                <img src="../../../assets/image2.jpg" class="d-block w-100 image-side" alt="Image2">
            </div>
            <div class="carousel-item">
                <img src="../../../assets/image3.jpg" class="d-block w-100 image-side" alt="Image3">
            </div>
        </div>

    </div>
</template>

<style scoped>
.image-side {
    border: 1px solid #ddd;
    border-radius: 10px;
    width: 100%;
    height: 97vh;
    object-fit: cover;
}

.image-content {
    border: none;
}


.carousel-item {
    position: relative;
}

.buttons-overlay {
    position: absolute;
    top: 15px;
    left: 73%;
    gap: 5px;
    display: flex;

}

.btn {
    padding: 10px 20px;
    font-size: 16px;
}

.btn-export {
    padding: 10px 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
    color: rgb(49, 49, 49);
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.btn-export:hover {
    background-color: #0056b3;
}

.image-hint {
    width: 150px;
    left: 2%;
    gap: 5px;
    font-weight: 200;
    font-family: bold;
}
</style>
<script setup>
import { useI18n } from 'vue-i18n';
const { locale, t } = useI18n();

const changeLanguage = (language) => {
    locale.value = language;

    if (language === 'ar') {
        document.body.classList.add('rtl');
    } else {
        document.body.classList.remove('rtl');
    }
};

</script>