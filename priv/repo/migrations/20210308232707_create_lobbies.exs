defmodule Lobbies.Repo.Migrations.CreateLobbies do
  use Ecto.Migration

  def change do
    create table(:room) do
      add :lobbyname, :string
      add :lobbydesc, :string
      add :gamerules, :string
      add :gamecode, :string
      add :user_ids, {:array, :integer}
      add :chatHistory, {:array, :map}

      # For the chat history, we intend to have the following keys and values...
      # nickname -> string
      # userid -> integer
      # message -> string
      # And these three properties are what constitute a chat message
      # And we have an array of these chat messages to comprise a
      # chat history.
      # Probably we'll want to limit the size of the array, and the size of
      # each message.

      timestamps()
    end


    create table(:users) do
      # add :id, :integer
      add :secret, :integer
      add :nickname, :string

      timestamps()
    end







  end
end
