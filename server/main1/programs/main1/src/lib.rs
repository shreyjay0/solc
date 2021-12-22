use anchor_lang::prelude::*;

declare_id!("3da9USJv9BBFdnuWQsMxSE4vArxS1aEzXBnFsBaWdkKh");

#[program]
pub mod main1 {
    use super::*;
    pub fn initialize(ctx: Context<Initialize>) -> ProgramResult {
        let pg_acc =&mut ctx.accounts.pg_acc;
        pg_acc.post_count = 0 as u64;
        Ok(())
    }
    
    //send new post 
    pub fn new_post(ctx: Context<NewPost>, post_content: String) -> ProgramResult {
        let pg_acc =&mut ctx.accounts.pg_acc;
        let user =&mut ctx.accounts.user;
        let post_content_as_str = post_content.to_string();
        let post_content_trimmed ;
        if post_content_as_str.len() > 300
         { 
            post_content_trimmed = post_content[..300].to_string(); 
        }
        else{
            post_content_trimmed = post_content_as_str;
        }
        let post_id_as_i32 = (pg_acc.post_count + 1000) as i32;
        println!("post_id_as_i32: {}", post_id_as_i32);
        let post = PostStruct{
            post_content: post_content_trimmed,
            post_id: post_id_as_i32,
            post_author: *user.to_account_info().key
        };

        pg_acc.all_posts.push(post) ;
        pg_acc.post_count += 1;
        Ok(())
    }
}


//main pg account structure
#[derive(Accounts)]
pub struct Initialize <'info> {
    #[account(init, payer = user, space = 9000)]
    pub pg_acc: Account<'info,PgAcc>,
    pub system_program: Program<'info,System>,
    #[account(mut)]
    pub user : Signer<'info>
}

// Post object structure with anchor serialisation
#[derive(Debug, Clone, AnchorSerialize, AnchorDeserialize)]
pub struct PostStruct {
    pub post_content: String,
    pub post_id: i32,
    pub post_author: Pubkey
}

//init account struct for the main program
#[account]
pub struct PgAcc {
    pub post_count : u64,
    pub all_posts : Vec<PostStruct>
}

//init new post struct to allow mutable modification of the post_count
#[derive(Accounts)]
pub struct NewPost <'info> {
    #[account(mut)]
    pub pg_acc : Account<'info,PgAcc>,
    #[account(mut)]
    pub user: Signer<'info>,

}
