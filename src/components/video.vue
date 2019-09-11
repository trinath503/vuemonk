<template>
    <div class="container">
        <h1>Video Page</h1>
        <ul>
        	<li>1.Video automatically get paused on user enter text for the frame</li>
        	<br>
        	<li>2.After enter keypress the annotations gets automatically get saved and play the video</li>
        </ul>
       <video id="myVideo" width="320" height="176" autoplay>
		  <source src="https://www.radiantmediaplayer.com/media/bbb-360p.mp4" type="video/mp4">
		  Your browser does not support HTML5 video.
		</video>
		<br>
       <button @click="playVid" class="btn btn-default"  type="button">Play Video</button>
       <button @click="pauseVid" class="btn btn-primary" type="button">Pause Video</button><br> 
       <br>
       
		<p v-if="videoPausedAt>0" > You Paused the video at : <strong style="color:#00adef">{{videoPausedAt | videTime}} </strong></p>	
		 <div class="form-group">
            <label for="email">Enter Your Text</label>
            <br>
            <span v-if="isTextDisplable" style="text-align:center;color:green;"> After entering the text click on enter to auto play </span>
            <input
                    type="text"
                    id="email"
                    class="form-control"
                    v-on:keydown="EnterTextForFrame"
                    v-on:keydown.enter="ContinuePlaying"
                    v-model="frameDetails">
             
         
        </div>
        <button v-if="getAnnotations.length>0" @click="showAnnotaions" class="btn btn-primary" type="button">Show All Annotations</button>

		<app-annotations v-if="displayAnnotations" v-for="annotaion in getAnnotations" :annotaion="annotaion" style="margin-top:20px"></app-annotations>

    </div>
</template>
<script>
import Annotations from './Annotaions.vue';
export default {
	data(){
		return{
			canvasId:'',
			frameDetails:'',
			videoPausedAt:',',
			isTextDisplable:false,
			displayAnnotations: false
		}

	},
	components:{
		'appAnnotations': Annotations
	},
	methods:{
		playVid(){
			console.log('Play');
			this.canvasId.play(); 
		},
		pauseVid(){
			this.canvasId.pause(); 
			this.isTextDisplable =true;
			console.log('Pause');
		},
		EnterTextForFrame(){
			console.log('Entering some text by user',this.frameDetails);
			this.pauseVid();
			this.videoPausedAt = this.canvasId.currentTime;
		},
		ContinuePlaying(){
			const annDetails ={
				name: this.frameDetails,
				time: parseFloat(this.canvasId.currentTime).toFixed( 2 )
			}
			console.log('after storing the frame',annDetails);
			this.$store.dispatch('AddAnnotations',annDetails);
			this.frameDetails ='';
			this.isTextDisplable = false;
			this.playVid();
			console.log(this.$store.getters.getAnnotationDetails);
		},
		showAnnotaions(){
			this.displayAnnotations =true;
		}
		


	},
	mounted: function(){
		this.canvasId = document.getElementById("myVideo"); 
		console.log(this.canvasId);
	},
	created(){
		this.$store.dispatch('InitalizeAnnotations');
		console.log('Vue components created');
	},
	computed:{
		getAnnotations(){
			return this.$store.getters.getAnnotationDetails;
		}
	}
    
}
</script>
<style scoped>

</style>

