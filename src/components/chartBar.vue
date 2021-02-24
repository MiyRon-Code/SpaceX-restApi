<script>
import { Bar } from 'vue-chartjs'
export default {
    extends: Bar,
    props:{
        label: String,
        labels: Array,
        data: Array,
    },
    mounted () {
        this.renderChart({
        labels: this.labels,
        datasets: [{
            label: this.label,
            data: this.data,
            backgroundColor: [
                'rgba(0, 5, 230, 0.8)',
                'rgba(0, 1, 64,0.8)',
                'rgba(0, 6, 255,0.8)',
                'rgba(0, 4, 191,0.8)',
                'rgba(0, 3, 128,0.8)',
            ],
            borderColor: [
                'rgba(255, 255, 255, 1)',
            ],
            borderWidth: 1
        }]
    }, {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: false
                }
            }]
        },
        legend: {
            labels: {
                // This more specific font property overrides the global property
                fontColor: 'black',
                defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"	
            }
        },
        
        
    })

},
created(){
           // Any of the following formats may be used

    }    

}
</script>