<template>
    <div>
        <h1>UserDetails Page</h1>
        <button class="btn btn-primary" @click="confirmed = true">Accept</button>
        <button class="btn btn-primary" @click="confirmed = !confirmed">Chage</button>
        <br>
        {{confirmed}}
         <canvas id="myCanvas" width="500" height="500" ref="canvas" >Your browser does not support the HTML5 canvas tag.</canvas>
        <div class="container" v-if="0">
        <form v-show="!showresults">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h1>File a Complaint</h1>
                    <hr>
                    <div class="form-group">
                        <label for="email">Mail</label>
                        <input
                                type="email"
                                id="email"
                                class="form-control"
                                v-model.lazy="userData.email">
                     
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input
                                type="password"
                                id="password"
                                class="form-control"
                                v-model.lazy="userData.password">
                    </div>
                    <div class="form-group">
                        <label for="age">Age</label>
                        <input
                                type="number"
                                id="age"
                                class="form-control"
                                v-model="userData.age">
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="message">Message</label><br>
                    <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
                    <textarea
                            id="message"
                            rows="5"
                            class="form-control"
                            v-model="message"></textarea>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <div class="form-group">
                        <label for="sendmail">
                            <input
                                    type="checkbox"
                                    id="sendmail"
                                    value="SendMail"
                                    v-model="sendEmail"> Send Mail
                        </label>
                        <label for="sendInfomail">
                            <input
                                    type="checkbox"
                                    id="sendInfomail"
                                    value="SendInfoMail"
                                    v-model="sendEmail"> Send Infomail
                        </label>
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="male">
                        <input
                                type="radio"
                                id="male"
                                value="Male"
                                v-model="gender"> Male
                    </label>
                    <label for="female">
                        <input
                                type="radio"
                                id="female"
                                value="Female"
                                v-model="gender"> Female
                    </label>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
                    <label for="priority">Priority</label>
                    <select
                            id="priority"
                            class="form-control"
                            v-model="selectedPriority">
                        <option v-for="opt in priorities">{{opt}}</option>
                    </select>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <button
                            class="btn btn-primary"
                            @click.prevent="submitted">Submit!
                    </button>
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="showresults">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Mail: {{userData.email}}</p>
                        <p>Password:{{userData.password}}</p>
                        <p>Age: {{userData.age}}</p>
                        <p style="white-space:pre">Message: {{message}} </p>
                        <p><strong>Send Mail?</strong> </p>
                        <ul>
                            <li v-for="item in sendEmail">
                                {{item}}
                            </li>
                        </ul>
                        <p>Gender: {{gender}}</p>
                        <p>Priority: {{selectedPriority}}</p>
                        <p>Switched:</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            confirmed: false,
            userData:{
                email:'',
                password:'',
                age:25,
            },
            message:'',
            sendEmail:[],
            gender:'Male',
            selectedPriority:'Low',
            priorities: ["Low","Medium","High"],
            showresults: false
        }

    },
    methods:{
        submitted(){
            this.showresults =true;
        },

        DrawResultOnCanvas(input_image,actualX1,actualY1,actualX2,actualY2,face_details){ 
            var canvas = document.getElementById('myCanvas');
            var ctx = canvas.getContext('2d');
            var canvasWidth = 500;
            var canvasHeight = 500;
            var img = new Image();
            img.onload = function()
            {
                ctx.drawImage(img,0,0,canvasWidth,canvasHeight); 
                var c=document.getElementById("myCanvas");
                var context=c.getContext("2d");
                var realWidth = img.naturalWidth;
                var realHeight = img.naturalHeight;
                    
                var xMultiFactor = realWidth/canvasWidth;
                var yMultiFactor = realHeight/canvasHeight;
                
                var canvas_x1 = actualX1 / xMultiFactor;
                var canvas_y1 = actualY1 / yMultiFactor;
                var canvas_x2 = actualX2 / xMultiFactor;
                var canvas_y2 = actualY2 / yMultiFactor;

                context.beginPath();
                context.rect(canvas_x1, canvas_y1, canvas_x2-canvas_x1, canvas_y2-canvas_y1);
                context.lineWidth = 1;
                context.strokeStyle = 'red';
                context.fillStyle = "blue";
                context.font = "sans-serif";
                context.fillText(face_details, canvas_x1+50, canvas_y1-10);
                context.stroke();
            }
            img.src = input_image;
        }
    },
    beforeRouteLeave(to,from,next){
        if(this.confirmed){
            next();
        }else{
            if(confirm('Are you sure?')){
                next();
            }else{
                next(false);
            }
        }
    },
    mounted:function(){
        var src="https://bernardmarr.com/img/Deep%20Learning%20Vs%20Neural%20Networks%20Whats%20The%20Difference.png";
        this.DrawResultOnCanvas(src,100,100,250,300,'rectangle');
    }
}
</script>
<style scoped>

</style>

