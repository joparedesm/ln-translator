import cohere from 'cohere-ai';

cohere.init('PohercyMwTYaFaOLdZcPcqj8AqPwTMAek9T44rOW');

export async function translator(input){

    const response = await cohere.generate({
        model: 'xlarge',
        prompt: `This is a translator
--
Japanese: "愛しは私が床に落ちて、強い表情をするときに私を見つめている。"
English: "Aishi is smiling at me as I fall to the floor and make a fierce expression."
--
Japanese: "私は彼女を見つめて、彼女は私を見つめている。"
English: "I am looking at her and she is looking at me."
--
Japanese: "バカみたいだから笑う。"
English: "I laugh becouse you look like an idiot."
-- 
Japanese: "${input}"
English: "`,
            maxTokens: 50,
            temperature: 0.4,
            k: 0,
            p: 0.9,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
            stop_Sequences: ['--'],
            return_likelihoods: 'NONE'
    })
}