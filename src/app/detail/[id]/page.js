
import { createClient } from "@/app/utils/supabase/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Detail({ params }) {
  const supabase = createClient();
  const { id } = await params
  const { data:currnet, error } = await supabase.from("portfolio").select().eq('id', id).single();

  
  const { data:prev } = await supabase
    .from('portfolio')
    .select('id')
    .lt('created_at', currnet.created_at)
    .limit(1)
    .maybeSingle();

  
  const { data:next } = await supabase
    .from('portfolio')
    .select('id')
    .gt('created_at', currnet.created_at)
    .order('created_at',{ascending:false})
    .limit(1)
    .maybeSingle();

  const getPublicUrl = (path) => {
    if (!path) return null
    const { data } = supabase
      .storage
      .from('portfolio')
      .getPublicUrl(path);

    return data.publicUrl;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 decription">
          <div className="contents shadow">
            {
              currnet.rep1_img ? <>
                <Image src={getPublicUrl(currnet.rep1_img)} alt={currnet.rep1_desc} width={762} height={504} />
                <p>{currnet.rep1_desc}</p>
              </>
              : <p>대표이미지1 없음</p>
            }

          </div>
          <div className="contents shadow">
            {
              currnet.rep1_img  ? <>
                <Image src={getPublicUrl(currnet.rep2_img)} alt={currnet.rep2_desc} width={762} height={504} />
                <p>{currnet.rep2_desc}</p>
              </>
              : <p>대표이미지2 없음</p>
            }

          </div>
        </div>
        <div className="col-md-4 portfolio_info">
          <div className="contents shadow">
            <h2>{currnet.title}</h2>
            <div>{currnet.content} </div>
            <p className="link">
              <a href={`${currnet.url}`}>Visit site &rarr;</a>
            </p>
            <hr className="double" />
            <blockquote>
              <p>{currnet.review}</p>
              <small>- {currnet.reviewer} -</small>
            </blockquote>
            <p className="nav">
              {
                prev && <Link href={`/detail/${prev.id}`} className="secondary-btn">&larr; Previous Project</Link>
              }
              {
                next && 
                <Link href={`/detail/${next.id}`}className="secondary-btn">Next Project &rarr;</Link>
              }
              
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 
