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
            this.get("/api/jobs/search", (schema, request) => {
                let jobs: {
                    category: string
                    candidate_required_location: string
                    job_type: string
                    company_name: string
                }[] = schema.db.job;
                const search = String(request.queryParams?.['search'] || '');
                if (search) {
                    jobs = jobs.filter(({category, candidate_required_location, job_type, company_name}) => {
                        return category.toLowerCase().includes(search)
                            || candidate_required_location.toLowerCase().includes(search)
                            || job_type.toLowerCase().includes(search)
                            || company_name.toLowerCase().includes(search)
                    });
                }
                return jobs;
            })

            this.get("/api/jobs", (schema, request) => {
                const category = String(request.queryParams?.['category'] || '');
                const location = String(request.queryParams?.['location'] || '');
                const jobType = String(request.queryParams?.['job_type'] || '');
                let jobs: { category: string, candidate_required_location: string, job_type: string }[] = schema.db.job;
                if (category) {
                    const filter = category.split(',')
                    jobs = jobs.filter(({category}) => {
                        return filter.some(substring => category.toLowerCase().includes(substring))
                    });
                }

                if (location) {
                    const filter = location.split(',')
                    jobs = jobs.filter(({candidate_required_location}) => {
                        return filter.some(substring => candidate_required_location.toLowerCase().includes(substring))
                    });
                }

                if (jobType) {
                    const filter = jobType.split(',')
                    jobs = jobs.filter(({job_type}) => {
                        return filter.some(substring => job_type.toLowerCase().includes(substring))
                    });
                }

                return jobs;
            })

            this.passthrough("https://remotive.com/**")
        },
    })
}