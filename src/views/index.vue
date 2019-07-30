<template>
    <div class="index">
        <div class="slogan-box">
            <h1 class="title">
                HRM-Base-UI
            </h1>
            <p class="slogan">
                给您的客户最满意的答复！
            </p>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'Index'
    };

</script>

<style lang="scss" scoped>

    .index {
        text-align: center;

        footer {
            margin: 60px 30px;
            text-align: center;
            font-size: .9em;
            color: #999;

            p {
                margin-bottom: .2em;
                line-height: 1em;
            }
        }

        .slogan-box {
            position: relative;
            margin-top: 15vh;
            animation: 1.5s ease slide-up;

            .title {
                font-size: 2.5em;
                color: #3260ed;
            }

            .slogan {
                position: relative;
                top: 50%;
                color: #666;
                margin: 0 auto;
                text-align: center;
                border-right: 2px solid rgba(255, 255, 255, .75);
                white-space: nowrap;
                overflow: hidden;
                background-color: transparent;
                outline: none;
                font-family: monospace;
                animation:
                    type-writer 4s steps(40) 1s 1 normal both,
                    blink-text-cursor .8s steps(40) infinite normal;
            }
        }

        @keyframes slide-up {
            from {
                margin-top: 20vh;
                opacity: .5;
            }

            to {
                margin-top: 15vh;
                opacity: 1;
            }
        }

        @keyframes type-writer {
            from {
                width: 0;
            }

            to {
                width: 12em;
            }
        }

        @keyframes blink-text-cursor {
            from {
                border-right-color: rgba(0, 0, 0, .75);
            }

            to {
                border-right-color: transparent;
            }
        }
    }

</style>