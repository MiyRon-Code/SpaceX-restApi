<script>
import { Line } from 'vue-chartjs'
export default {
    extends: Line,
    props:{
        labels: Array,
        data: Array,
    },
    mounted () {
        this.renderChart({
        labels: this.labels,
        datasets: [{
            label: '# of Votes',
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
        }
    })
},
created(){
           // Any of the following formats may be used

    }    

}
</script>