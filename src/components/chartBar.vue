<script>
import { Bar } from 'vue-chartjs'
export default {
    extends: Bar,
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
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
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