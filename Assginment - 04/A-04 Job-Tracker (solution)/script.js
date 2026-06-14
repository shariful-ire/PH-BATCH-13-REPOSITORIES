const jobs =[
{ id:1, company:"TechNova", position:"Frontend Developer", location:"Dhaka", type:"Full-time", salary:"80,000 BDT", description:"Develop modern user interfaces.", status:"all" },
{ id:2, company:"CloudSync", position:"Cloud Engineer", location:"Remote", type:"Full-time", salary:"120k USD", description:"Manage cloud infrastructure.", status:"all" },
{ id:3, company:"InnoSoft", position:"Backend Developer", location:"Remote", type:"Full-time", salary:"100,000 BDT", description:"Build secure APIs.", status:"all" },
{ id:4, company:"DataViz", position:"Data Analyst", location:"New York", type:"Full-time", salary:"95k USD", description:"Analyze company data.", status:"all" },
{ id:5, company:"WebFlow", position:"UI Designer", location:"LA", type:"Part-time", salary:"70k USD", description:"Design web layouts.", status:"all" },
{ id:6, company:"AI Labs", position:"ML Engineer", location:"Remote", type:"Full-time", salary:"150k USD", description:"Develop ML models.", status:"all" },
{ id:7, company:"FinTech Pro", position:"Software Engineer", location:"Dhaka", type:"Full-time", salary:"90,000 BDT", description:"Build fintech apps.", status:"all" },
{ id:8, company:"NextGen", position:"DevOps Engineer", location:"Remote", type:"Full-time", salary:"110k USD", description:"Maintain CI/CD pipelines.", status:"all" }
];

const container = document.getElementById("jobsContainer");
let currentTab = "all";

function updateDashboard(){
    document.getElementById("totalCount").innerText = jobs.length;

    document.getElementById("interviewCount").innerText =
        jobs.filter(j => j.status === "interview").length;

    document.getElementById("rejectedCount").innerText =
        jobs.filter(j => j.status === "rejected").length;
}

function setStatus(id, status){
    const job = jobs.find(j => j.id === id);
    if (job) {
        job.status = status;
        updateDashboard();
        renderJobs();
    }
}

function deleteJob(id){
    const index = jobs.findIndex(j => j.id === id);
    if (index !== -1) {
        jobs.splice(index, 1);
        updateDashboard();
        renderJobs();
    }
}

function renderJobs(){
    container.innerHTML = "";

    let filtered = jobs.filter(job =>{
        if (currentTab === "all") return true;
        return job.status === currentTab;
    });

    document.getElementById("tabCount").innerText = filtered.length + " jobs";

    if (filtered.length === 0){
        container.innerHTML = `
            <div class="bg-white p-10 text-center rounded shadow">
                <div class="text-4xl mb-3">📄</div>
                <p class="text-xl font-semibold">No jobs Available</p>
                <p class="text-gray-500">You have not added anything here yet.</p>
            </div>
        `;
        return;
    }

    filtered.forEach(job =>{

        const card = document.createElement("div");
        card.className = "bg-white p-6 rounded shadow";

        card.innerHTML = `
            <div class="relative">

                <!-- Delete Button -->
                <button onclick="deleteJob(${job.id})"
                    class="absolute top-2 right-2 text-gray-400 hover:text-red-600 text-lg">
                    🗑
                </button>

                <h3 class="font-semibold text-lg mb-1">
                    ${job.company}
                </h3>

                <p class="font-medium">
                    ${job.position}
                </p>

                <p class="text-sm text-gray-500 mb-2">
                    ${job.location} • ${job.type} • ${job.salary}
                </p>

                <p class="text-gray-600 mb-4">
                    ${job.description}
                </p>

                <div class="flex gap-3">
                    <button onclick="setStatus(${job.id}, 'interview')"
                        class="bg-green-600 text-white px-4 py-1.5 rounded">
                        Interview
                    </button>

                    <button onclick="setStatus(${job.id}, 'rejected')"
                        class="bg-red-600 text-white px-4 py-1.5 rounded">
                        Rejected
                    </button>
                </div>

            </div>
        `;
        container.appendChild(card);
    });
}

document.querySelectorAll(".tab").forEach(btn =>{
    btn.addEventListener("click", function(){

        currentTab = this.dataset.tab;

        document.querySelectorAll(".tab").forEach(t =>{
            t.classList.remove("bg-indigo-600", "text-white");
            t.classList.add("bg-gray-200");
        });

        this.classList.add("bg-indigo-600", "text-white");
        this.classList.remove("bg-gray-200");

        renderJobs();
    });
});

updateDashboard();
renderJobs();