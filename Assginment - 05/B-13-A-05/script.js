const cardContainer = document.getElementById('card');
const issueTextContainer = document.getElementById('issue-text');
const searchInput = document.querySelector('input[type="text"]');
const searchBtn = document.querySelector('.btn-primary');
const allBtn = document.getElementById('all');
const openBtn = document.getElementById('open');
const closedBtn = document.getElementById('closed');
let allIssues = [];

const setActiveBtn = (active)=>{
    [allBtn, openBtn, closedBtn].forEach(btn => {
        btn.classList.replace('btn-primary', 'btn-ghost');
    });
    document.getElementById(active).classList.replace('btn-ghost', 'btn-primary');
};

const showLoading = () =>{
    cardContainer.innerHTML = `<div class="col-span-full text-center p-10"><span class="loading loading-spinner loading-lg text-primary"></span><p class="mt-2">Loading Issues...</p></div>`;
};

const getLabelClass = (label)=>{
    const l = label.toUpperCase();
    if (l.includes('BUG')) return 'text-red-600 border-red-200 bg-red-50';
    if (l.includes('ENHANCEMENT') || l.includes('GOOD FIRST') || l.includes('DOCS') || l.includes('DOCUMENTATION')) return 'text-green-600 border-green-200 bg-green-50';
    if (l.includes('HELP')) return 'text-amber-600 border-amber-200 bg-amber-50';
    return 'text-gray-600 border-gray-200 bg-gray-50';
};

const getPriorityClass = (p)=>{
    const priority = p.toUpperCase();
    if (priority === 'HIGH') return 'bg-red-100 text-red-600';
    if (priority === 'MEDIUM') return 'bg-yellow-100 text-yellow-600';
    if (priority === 'LOW') return 'bg-green-100 text-green-600';
    return 'bg-gray-100 text-gray-600';
};

const formatDate = (d)=>{
    const date = new Date(d);
    return `${date.getDate().toString().padStart(2,'0')}/${(date.getMonth()+1).toString().padStart(2,'0')}/${date.getFullYear()}`;
};

const displayIssues = (issues)=>{
    cardContainer.innerHTML = '';
    cardContainer.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6 bg-white';
    issueTextContainer.innerHTML = `<span class="text-2xl font-bold text-black">${issues.length} Issues</span>`;

    if (!issues.length) {
        cardContainer.innerHTML = `<div class="col-span-full text-center p-10 text-gray-500">No issues found</div>`;
        return;
    }

    issues.forEach(issue => {
        const labels = (issue.labels || []).map(l => 
            `<span class="badge badge-outline text-[10px] px-2 py-1 ${getLabelClass(l)}">${l.toUpperCase()}</span>`
        ).join('');

        const statusIcon = issue.status === 'open' 
            ? './assets/Open-Status.png' 
            : './assets/Closed-Status .png';

        cardContainer.innerHTML += `
            <div class="card bg-base-100 shadow-sm border border-gray-200 ${issue.status === 'open' ? 'border-t-4 border-green-500' : 'border-t-4 border-purple-500'} cursor-pointer hover:shadow-lg p-4" onclick="showIssue('${issue.id}')">
                <div class="flex items-center gap-2 mb-3">
                    <img src="${statusIcon}" class="h-4 w-4" alt="${issue.status}">
                </div>
                <div class="flex justify-between items-start gap-2 mb-2">
                    <h2 class="font-bold text-sm text-gray-800 flex-1 line-clamp-2">${issue.title}</h2>
                    <span class="badge badge-sm ${getPriorityClass(issue.priority)} border-none text-[10px] font-bold px-2 py-1">${issue.priority.toUpperCase()}</span>
                </div>
                <p class="text-xs text-gray-600 mb-3 line-clamp-2">${issue.description}</p>
                <div class="flex gap-1.5 mb-3 flex-wrap">${labels || '<span class="text-[10px] text-gray-400">No labels</span>'}</div>
                <div class="text-[10px] text-gray-400 border-t border-gray-100 pt-2">
                    <p>#${issue.id} by ${issue.author}</p>
                    <p>${formatDate(issue.createdAt)}</p>
                </div>
            </div>
        `;
    });
};

const fetchAllIssues = async ()=>{
    showLoading();
    try {
        const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues');
        const data = await res.json();
        allIssues = data.data;
        displayIssues(allIssues);
    } catch {
        cardContainer.innerHTML = '<p class="text-red-500 text-center p-10">Failed to load data</p>';
    }
};

const filterData = (status)=>{
    setActiveBtn(status);
    showLoading();
    setTimeout(() => {
        if (status === 'all') {
            displayIssues(allIssues);
        } else {
            const filtered = allIssues.filter(i => i.status === status);
            displayIssues(filtered);
        }
    }, 300);
};

// FIXED: Search function
searchBtn.onclick = async ()=>{
    const q = searchInput.value.trim();
    
    // If search is empty, show all issues
    if (!q) {
        displayIssues(allIssues);
        setActiveBtn('all');
        return;
    }
    
    showLoading();
    try {
        const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${encodeURIComponent(q)}`);
        const data = await res.json();
        
        // Display search results
        displayIssues(data.data);
        
        // Set All button as active (since search shows all results)
        setActiveBtn('all');
        
        // Optional: Clear search input after search
        // searchInput.value = '';
    } catch {
        cardContainer.innerHTML = '<p class="text-red-500 text-center p-10">Search failed</p>';
    }
};

// Also handle Enter key
searchInput.onkeypress = (e)=>{
    if (e.key === 'Enter') {
        searchBtn.click();
    }
};

window.showIssue = async (id)=>{
    const loadingModal = document.createElement('dialog');
    loadingModal.innerHTML = `<div class="modal-box text-center p-10"><span class="loading loading-spinner loading-lg text-primary"></span><p class="mt-2">Loading...</p></div>`;
    document.body.appendChild(loadingModal);
    loadingModal.showModal();

    try {
        const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`);
        const issue = (await res.json()).data;
        
        loadingModal.close();
        loadingModal.remove();

        const modal = document.createElement('dialog');
        modal.className = 'modal modal-bottom sm:modal-middle';
        
        const labels = (issue.labels || []).map(l => 
            `<span class="badge badge-outline px-3 py-2 ${getLabelClass(l)}">${l.toUpperCase()}</span>`
        ).join('');

        modal.innerHTML = `
            <div class="modal-box bg-white p-6 max-w-2xl">
                <div class="flex justify-between items-start mb-4">
                    <h3 class="font-bold text-2xl">${issue.title}</h3>
                    <span class="badge ${issue.status === 'open' ? 'bg-green-100' : 'bg-purple-100'} px-4 py-3">${issue.status.toUpperCase()}</span>
                </div>
                
                <div class="flex items-center gap-3 mb-4 text-sm text-gray-500">
                    <span>#${issue.id}</span>
                    <span>by ${issue.author}</span>
                    <span>${formatDate(issue.createdAt)}</span>
                </div>
                
                <div class="flex gap-2 mb-4 flex-wrap">${labels || '<span class="text-gray-400">No labels</span>'}</div>
                
                <p class="text-gray-700 mb-6">${issue.description}</p>
                
                <div class="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
                    <div>
                        <span class="text-xs text-gray-500">Assignee:</span>
                        <span class="font-medium ml-2">${issue.author}</span>
                    </div>
                    <div>
                        <span class="text-xs text-gray-500">Priority:</span>
                        <span class="badge ${getPriorityClass(issue.priority)} ml-2 px-4 py-2 font-bold">${issue.priority.toUpperCase()}</span>
                    </div>
                </div>
                
                <div class="modal-action">
                    <form method="dialog">
                        <button class="btn btn-primary">Close</button>
                    </form>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        modal.showModal();
    } catch {
        loadingModal.close();
        loadingModal.remove();
        alert('Failed to load');
    }
};

allBtn.onclick = ()=> filterData('all');
openBtn.onclick = ()=> filterData('open');
closedBtn.onclick = ()=> filterData('closed');

setActiveBtn('all');
fetchAllIssues();