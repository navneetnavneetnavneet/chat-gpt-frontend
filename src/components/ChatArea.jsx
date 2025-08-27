import React from "react";

const ChatArea = () => {
  return (
    <div className="w-full md:w-[80%] lg:w-[70%] px-4 py-2 h-[75vh] relative overflow-y-auto overflow-x-hidden">
      <div className="flex flex-col gap-2 items-center text-center absolute top-1/2 -translate-y-1/2">
        <h4 className="w-fit px-4 py-2 text-xs tracking-tight opacity-60 bg-zinc-800 rounded-full">
          Early Preview
        </h4>
        <h1 className="text-4xl font-medium tracking-tight leading-none">
          ChatGPT Clone
        </h1>
        <p className="w-full px-4 sm:w-2/3 md:w-1/2 text-center text-sm opacity-60">
          Ask anything, Paste text, brainstrom ideas, or get quick
          explainations. Your chats stay in the sidebar so you can pick up where
          you left off.
        </p>
      </div>

      {/* <div className="w-fit px-4 py-2 ml-auto rounded-full bg-zinc-800">
        what is express.js ?
      </div>
      <div className="mt-10 flex flex-col gap-3">
        <p className="text-start text-base font-normal tracking-tight leading-normal">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit ex aut
          delectus illo tempore sed molestias sit amet eum ad sunt doloremque
          veniam illum accusamus natus, voluptate at beatae blanditiis, dolore
          repellat ipsa esse magnam modi nostrum! Mollitia saepe veritatis,
          debitis laudantium officiis voluptas impedit quis alias delectus quasi
          enim. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Expedita omnis necessitatibus ipsam doloremque modi tenetur dicta
          explicabo repellendus suscipit doloribus, illo libero deleniti
          repudiandae nemo sequi natus accusamus nostrum dolorem et soluta!
          Placeat quae odit, vel saepe distinctio dignissimos. Ipsa fugit cumque
          rerum blanditiis ex quos nostrum, dicta quis ipsam? Lorem, ipsum dolor
          sit amet consectetur adipisicing elit. Voluptatem odio amet
          exercitationem nisi similique sed libero culpa molestias, magnam
          laborum ipsum cum est nostrum modi beatae perferendis iusto? Ea, animi
          minima necessitatibus magni maiores veniam nihil explicabo commodi
          reiciendis provident dignissimos quidem mollitia omnis consequuntur,
          est similique officia corrupti quisquam vero dolores illum? Porro
          ullam eos nostrum beatae amet. Non fugiat eveniet consequuntur debitis
          in sint officia odit facere ullam et. Nisi ducimus est quisquam,
          temporibus inventore exercitationem ullam error quod delectus
          reprehenderit autem numquam, sequi natus nemo. Porro voluptatum
          corrupti vero adipisci quia possimus cum perspiciatis ipsa minima
          molestias!
        </p>
        <div className="w-full h-[1px] bg-zinc-600" />
        <div className="flex items-center gap-5">
          <i className="ri-file-copy-line text-xl md:text-lg cursor-pointer"></i>
          <i className="ri-thumb-up-line text-xl md:text-lg cursor-pointer"></i>
          <i className="ri-thumb-down-line text-xl md:text-lg cursor-pointer"></i>
          <i className="ri-volume-up-line text-xl md:text-lg cursor-pointer"></i>
          <i className="ri-share-line text-xl md:text-lg cursor-pointer"></i>
          <i className="ri-refresh-line text-xl md:text-lg cursor-pointer"></i>
        </div>
      </div> */}
    </div>
  );
};

export default ChatArea;
