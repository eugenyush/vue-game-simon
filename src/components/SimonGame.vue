<template>
    <div class="simon">
        <div class="simon-title">The Game Simon</div>
        <div class="simon-button">
            <div class="button button-num1" :class="{ishoverbtn:buttons[0].hoverbtn}" @click.prevent="onClick(0)"></div>
            <div class="button button-num2" :class="{ishoverbtn:buttons[1].hoverbtn}" @click.prevent="onClick(1)"></div>
            <div class="button button-num3" :class="{ishoverbtn:buttons[2].hoverbtn}" @click.prevent="onClick(2)"></div>
            <div class="button button-num4" :class="{ishoverbtn:buttons[3].hoverbtn}" @click.prevent="onClick(3)"></div>
        </div>
         <div class="panel">
            <div class="panel-round">Round:{{round}}</div>
            <button class="panel-btn" @click="start" :disabled="disableBtn">Start</button>
            <div class="panel-options">Game options:</div>
            <div class="panel-radiobtn">
                <input :disabled="disableBtn" id="easy" type="radio" name="option" value="easy" v-model="option">
                <label for="easy">Easy</label>
            </div>
            <div class="panel-radiobtn">
                <input :disabled="disableBtn" id="normal" type="radio" name="option" value="normal" v-model="option">
                <label for="normal">Normal</label>
            </div>
            <div class="panel-radiobtn">
                <input :disabled="disableBtn" id="hard" type="radio" name="option" value="hard" v-model="option">
                <label for="hard">Hard</label>
            </div>
            <div class="panel-lose" v-show="lose">YOU LOSE!</div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            massPr:[],
            massPo:[],
            interval: null,
            probably: false,
            disableBtn: false,
            round: 0,
            lose: false,
            option: 'easy',
            buttons:[
                {
                    sound:'https://s3.amazonaws.com/freecodecamp/simonSound1.mp3',
                    hoverbtn: false
                },
                {
                    sound:'https://s3.amazonaws.com/freecodecamp/simonSound2.mp3',
                     hoverbtn: false
                },
                 {
                    sound:'https://s3.amazonaws.com/freecodecamp/simonSound3.mp3',
                     hoverbtn: false
                },
                {
                    sound:'https://s3.amazonaws.com/freecodecamp/simonSound4.mp3',
                    hoverbtn: false
                }
            ]

        }
    },
    methods:{
        start(){
            this.reset()
            this.addNewBtn()
        },
        reset(){
            this.massPr = []
            this.probably = false
            this.disableBtn = true
            this.lose = false
            this.round = 0
        },
        addNewBtn(){
            this.massPr.push(Math.floor(Math.random()*3))
            let i = 0
            let speed = this.selectOption()
            this.massPo = []
            this.interval = setInterval(() => {
                if(i >= this.massPr.length) {
                    clearInterval(this.interval);
                    this.probably = true
                }
                this.hoverBtn(this.massPr[i])
                this.soundPlay(this.buttons[this.massPr[i]].sound)
                i++
            },speed);
        },
        onClick(btn){
            if(this.probably){
                this.massPo.push(btn)
                this.soundPlay(this.buttons[btn].sound)
                this.hoverBtn(btn)
                this.checkResult()
            } 
        },
        checkResult(){
            for(let i = 0; i < this.massPo.length; i++){
                if(this.massPo[i] !== this.massPr[i]){
                    this.probably = false
                    this.disableBtn = false
                    this.lose = true
                    return
                }
                if(this.massPo.length === this.massPr.length){
                    this.round++
                    this.probably = false
                    this.addNewBtn()
                }
            }
        },
        hoverBtn(num){
            this.buttons[num].hoverbtn = true
            setTimeout(() => this.buttons[num].hoverbtn = false, 300)
        },
         soundPlay(sound) {
            var audio = new Audio(sound);
            audio.play();
        },
        selectOption(){
            let speed = 0
            if(this.option === 'easy'){
                speed = 1500
            }else if(this.option === 'normal'){
                speed = 1000
            }else if(this.option === 'hard'){
                speed = 400
            }
            return speed
        }
    }
}
</script>

<style lang="sass" scoped>
.simon
    max-width: 600px
    &-title
        font-size: 50px
        margin-bottom: 34px
    .button
        height: 300px
        width: 300px
        opacity: 0.6
        border-radius: 150px 150px 150px 150px
        position: absolute
    .button-num1
        background: yellow
        clip: rect(0px, 150px, 150px, 0px)
    .button-num2
        background: blue
        clip: rect(0px, 300px, 150px, 150px)
    .button-num3
        background: green
        clip: rect(150px, 150px, 300px, 0px)
    .button-num4
        background: red
        clip: rect(150px,300px, 300px, 150px)    
    .ishoverbtn
        opacity: 1
    .panel
        margin-left: 400px
        font-size: 24px
        text-align: left
        &-btn
            background-color: #3ca1e9
            font-size: 16px
            color: white
            padding: 16px 20px
            border: none
            border-radius: 5px
            cursor: pointer
            opacity: 0.9
            margin: 5px auto
            width: 50%
            &:hover
                opacity: 1
        &-lose
            color: red
        @media (max-width: 600px)
            margin: 400px 100px
        &-radiobtn
            margin-top: 10px
    &-button
        @media (max-width: 600px)
            margin: 0 20px;
    @media (min-width: 600px)
            margin: 100px auto
</style>