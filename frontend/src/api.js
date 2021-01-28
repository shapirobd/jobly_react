import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
	// the token for interactive with the API will be stored here.
	static token;

	static async request(endpoint, data = {}, method = "get") {
		console.debug("API Call:", endpoint, data, method);
		const url = `${BASE_URL}/${endpoint}`;
		const headers = { Authorization: `Bearer ${JoblyApi.token}` };
		const params = method === "get" ? data : {};

		try {
			return (await axios({ url, method, data, params, headers })).data;
		} catch (err) {
			console.error("API Error:", err.response);
			let message = err.response.data.error.message;
			throw Array.isArray(message) ? message : [message];
		}
	}

	// Individual API routes

	/** Get details on a company by handle. */

	static async getCompany(handle) {
		let res = await this.request(`companies/${handle}`);
		return res.company;
	}

	static async getCompanies(inputText) {
		let res;
		if (inputText === "") {
			res = await this.request(`companies`);
		} else {
			res = await this.request(`companies?name=${inputText}`);
		}
		return res.companies;
	}

	static async getJob(id) {
		let res = await this.request(`jobs/${id}`);
		return res.job;
	}

	static async getJobs(inputText) {
		let res;
		if (inputText === "") {
			res = await this.request(`jobs`);
		} else {
			res = await this.request(`jobs?title=${inputText}`);
		}
		return res.jobs;
	}

	static async getUser(username, data) {
		let res = await this.request(`users/${username}`, data);
		return res.user;
	}

	static async updateUser(username, data) {
		let res = await this.request(`users/${username}`, data, "patch");
		return res.user;
	}

	static async authenticate(data) {
		let res = await this.request(`auth/token`, data, "post");
		JoblyApi.token = res.token;
		return res;
	}

	static async signUp(data) {
		let res = await this.request(`auth/register`, data, "post");
		JoblyApi.token = res.token;
		return res;
	}

	static async applyToJob(username, id, data) {
		let res = await this.request(`users/${username}/jobs/${id}`, data, "post");
		return res;
	}
	// obviously, you'll add a lot here ...
}

JoblyApi.token = localStorage.getItem("token");
// for now, put token ("testuser" / "password" on class)
// JoblyApi.token;

export default JoblyApi;
