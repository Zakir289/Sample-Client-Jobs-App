import moment from "moment";
// import
export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

const osMap = {
  0: "Windows 32-bit",
  1: "Windows 64-bit",
  2: "Mac OS",
  3: "Linux",
};

const isProtected = (jobs) => {
  if (Array.isArray(jobs)) {
    for (let job = 0; job < jobs.length; job++) {
      if (jobs[job].status === "success") {
        return true;
      }
    }
    return false;
  }
};

const lastBackJob = (jobs) => {
  if (Array.isArray(jobs)) {
    let lastTime = Number.NEGATIVE_INFINITY,
      lastJob = "No Jobs";
    for (let j = 0; j < jobs.length; j++) {
      if (jobs[j].startTime > lastTime) {
        lastJob = jobs[j];
      }
    }
    return lastJob;
  }
  return "No Jobs";
};

const lastBatchTiming = (jobs) => {
  if (Array.isArray(jobs)) {
    // find the max of start times(in seconds) in the jobs
    const lastJob = lastBackJob(jobs);
    return lastJob.startTime
      ? moment.utc(lastJob.startTime * 1000).format("MM/DD/YYYY, h:mm:ss")
      : "No Jobs";
  }
  return "No Jobs";
};

const avgTimeTaken = (jobs) => {
  if (Array.isArray(jobs) && jobs.length > 0) {
    return Math.floor(
      jobs.reduce((sum, job) => job.endTime - job.startTime) / jobs.length
    );
  }
  return "No Jobs";
};

const lastBatchJob = (client) => {
  const lastJob = lastBackJob(client.jobs);
  if (typeof lastJob === "string") {
    return {
      type: "string",
      value: lastJob.id,
    };
  } else {
    return {
      type: "link",
      value: lastJob.id,
      href: `/${client.id}/${lastJob.id}`,
    };
  }
};
const constructJobData = (jobs, clientId) => {
  if (Array.isArray(jobs)) {
    const jobsCollection = {};
    jobs.forEach((job) => {
      jobsCollection[job.id] = {
        jobId: { type: "link", value: job.id, href: `${clientId}/${job.id}` },
        JobStarted: {
          type: "string",
          value: moment.utc(job.startTime * 1000).format("MM/DD/YYYY, h:mm:ss"),
        },
        timeTaken: {
          type: "string",
          value: moment
            .utc((job.endTime - job.startTime) * 1000)
            .format("h:mm:ss"),
        },
        jobStatus: { type: "status", value: job.status },
      };
    });
    return jobsCollection;
  }
};

export const constructClientsData = (data) => {
  const modifiedData = {};
  if (Array.isArray(data)) {
    data.forEach(
      (client) =>
        (modifiedData[client.id] = {
          name: { type: "link", value: client.name, href: client.id },
          os: { type: "string", value: osMap[client.osType] },
          isProtected: { type: "flag", value: isProtected(client.jobs) },
          lastBatchTiming: {
            type: "string",
            value: lastBatchTiming(client.jobs),
          },
          lastBatchJob: lastBatchJob(client),
          avgTimeTaken: { type: "string", value: avgTimeTaken(client.jobs) },
          description: { type: "string", value: client.description },
          jobs: constructJobData(client.jobs, client.id),
        })
    );
    return modifiedData;
  }
  return [];
};
