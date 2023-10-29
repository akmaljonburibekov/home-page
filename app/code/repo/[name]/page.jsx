import Repo from "@/components/Repo";
import RepoDir from "@/components/RepoDir";
import { Suspense } from "react";

async function RepoPage({ params: { name }}) {
  return <div className="card">
  <Suspense fallback={<div>Loading repo...</div>}>
    <Repo name={name}/>
  </Suspense>

  <Suspense fallback={<div>Loading directories...</div>}>
    <RepoDir name={name}/>
  </Suspense>
  </div>
}

export default RepoPage;