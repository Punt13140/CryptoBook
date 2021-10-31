<?php

namespace App\Entity;

use App\Repository\BlockchainRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=BlockchainRepository::class)
 */
class Blockchain
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $libelle;

    /**
     * @ORM\OneToOne(targetEntity=Cryptocurrency::class, inversedBy="blockchain", cascade={"persist", "remove"})
     * @ORM\JoinColumn(nullable=false)
     */
    private $coin;

    /**
     * @ORM\OneToMany(targetEntity=Dapp::class, mappedBy="blockchain", orphanRemoval=true)
     */
    private $dapps;

    public function __construct()
    {
        $this->dapps = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLibelle(): ?string
    {
        return $this->libelle;
    }

    public function setLibelle(string $libelle): self
    {
        $this->libelle = $libelle;

        return $this;
    }

    public function getCoin(): ?Cryptocurrency
    {
        return $this->coin;
    }

    public function setCoin(Cryptocurrency $coin): self
    {
        $this->coin = $coin;

        return $this;
    }

    /**
     * @return Collection|Dapp[]
     */
    public function getDapps(): Collection
    {
        return $this->dapps;
    }

    public function addDapp(Dapp $dapp): self
    {
        if (!$this->dapps->contains($dapp)) {
            $this->dapps[] = $dapp;
            $dapp->setBlockchain($this);
        }

        return $this;
    }

    public function removeDapp(Dapp $dapp): self
    {
        if ($this->dapps->removeElement($dapp)) {
            // set the owning side to null (unless already changed)
            if ($dapp->getBlockchain() === $this) {
                $dapp->setBlockchain(null);
            }
        }

        return $this;
    }

    public function __toString()
    {
        return $this->libelle;
    }


}
