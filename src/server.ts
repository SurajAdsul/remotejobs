import {createServer, Model} from "miragejs"
import jobdata from './assets/remotejobs.json';

export function makeServer({environment = 'development'}) {
    return createServer({
        environment,

        models: {
            job: Model,
        },

        seeds(server) {
            server.db.loadData({
                job: jobdata['jobs']
            })
        },


        routes() {
            this.get("/api/users", () => [
                {id: "1", name: "Luke"},
                {id: "2", name: "Leia"},
                {id: "3", name: "Anakin"},
            ])
            this.get("/api/jobs", (schema, request) => {
                const category = String(request.queryParams?.['category'] || '');
                const location = String(request.queryParams?.['location'] || '');
                if (category) {
                    const filter = category.split(',')
                    console.log("category==", filter);
                    return schema.db.job.filter(({category}) => {
                        return filter.some(substring => category.toLowerCase().includes(substring))
                    });
                }

                if (location) {
                    const filter = location.split(',')
                    console.log("location==", filter);
                    return schema.db.job.filter(({candidate_required_location}) => {
                        return filter.some(substring => candidate_required_location.toLowerCase().includes(substring))
                    });
                }

                return schema.db.job
            })
            this.passthrough("https://remotive.com/**")
        },
    })
}